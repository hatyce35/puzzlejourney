import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameSaveState, ScreenState, LevelDefinition, JigsawPieceData, ThemeId } from './types/game';
import { THEME_LEVELS } from './data/themes';
import { generateJigsawPuzzle, GeneratedJigsawLevel } from './utils/jigsaw';
import { sound } from './utils/audio';
import { fireCelebrationConfetti } from './utils/confetti';
import {
  loadGameSave,
  updateLevelCompletion,
  setSoundSetting,
  setCurrentTheme,
} from './utils/storage';
import { useFullscreen } from './utils/useFullscreen';
import { useResponsiveLayout } from './utils/useResponsiveLayout';
import { MainMenu } from './components/MainMenu';
import { LevelSelect } from './components/LevelSelect';
import { ThemeSelectModal } from './components/ThemeSelectModal';
import { GameHeader } from './components/GameHeader';
import { PuzzleBoard } from './components/PuzzleBoard';
import { PieceTray } from './components/PieceTray';
import { DragOverlay } from './components/DragOverlay';
import { VictoryModal } from './components/VictoryModal';
import { PauseModal } from './components/PauseModal';

export default function App() {
  const [saveState, setSaveState] = useState<GameSaveState>(() => loadGameSave());
  const [currentTheme, setCurrentThemeState] = useState<ThemeId>(() => saveState.currentTheme || 'cities');
  const [showThemeModal, setShowThemeModal] = useState<boolean>(false);
  const [screen, setScreen] = useState<ScreenState>('MAIN_MENU');

  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const { useSideTray, boardSizePx, thumbSizePx } = useResponsiveLayout();

  const activeLevels = THEME_LEVELS[currentTheme] || THEME_LEVELS.cities;
  const themeData = saveState.themeProgress[currentTheme] || { unlockedLevel: 1, progress: {} };
  const initialLevelId = Math.min(20, Math.max(1, themeData.unlockedLevel));
  const [currentLevel, setCurrentLevel] = useState<LevelDefinition>(() =>
    activeLevels.find((l) => l.id === initialLevelId) || activeLevels[0]
  );

  // Jigsaw Board and Game Session State
  const [jigsaw, setJigsaw] = useState<GeneratedJigsawLevel>(() =>
    generateJigsawPuzzle(currentLevel.id, currentLevel.rows, currentLevel.cols, 600, 600)
  );
  const [lockedPieceIds, setLockedPieceIds] = useState<Set<number>>(new Set());
  const [unplacedPieces, setUnplacedPieces] = useState<JigsawPieceData[]>([]);

  // Dragging State
  const [draggingPiece, setDraggingPiece] = useState<JigsawPieceData | null>(null);
  const [dragPos, setDragPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isNearSnap, setIsNearSnap] = useState<boolean>(false);
  const [returnPos, setReturnPos] = useState<{ x: number; y: number } | null>(null);
  const [dragStartPos, setDragStartPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isTouchRef = useRef<boolean>(false);

  // Preview & Completion
  const [hasUsedPreview, setHasUsedPreview] = useState<boolean>(false);
  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showVictoryModal, setShowVictoryModal] = useState<boolean>(false);
  const [recentSnapCoord, setRecentSnapCoord] = useState<{ x: number; y: number } | null>(null);

  const boardRef = useRef<HTMLDivElement | null>(null);
  const previewTimerRef = useRef<number | null>(null);
  const snapTimerRef = useRef<number | null>(null);

  // Sync sound settings with audio engine
  useEffect(() => {
    sound.enabled = saveState.soundEnabled;
  }, [saveState.soundEnabled]);

  // Clean up timers
  useEffect(() => {
    return () => {
      if (previewTimerRef.current) window.clearTimeout(previewTimerRef.current);
      if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);
    };
  }, []);

  // Initialize a level
  const startLevel = useCallback((lvl: LevelDefinition) => {
    setCurrentLevel(lvl);
    const newJigsaw = generateJigsawPuzzle(lvl.id, lvl.rows, lvl.cols, 600, 600);
    setJigsaw(newJigsaw);

    // Shuffle the unplaced pieces randomly
    const shuffled = [...newJigsaw.pieces].sort(() => Math.random() - 0.5);
    setUnplacedPieces(shuffled);
    setLockedPieceIds(new Set());

    setDraggingPiece(null);
    setIsNearSnap(false);
    setReturnPos(null);
    setHasUsedPreview(false);
    setIsPreviewActive(false);
    setIsCompleted(false);
    setShowVictoryModal(false);
    setRecentSnapCoord(null);

    setScreen('PLAYING');
  }, []);

  const handleSoundToggle = useCallback(() => {
    const updated = setSoundSetting(!saveState.soundEnabled);
    setSaveState(updated);
    sound.enabled = updated.soundEnabled;
    if (updated.soundEnabled) {
      sound.playClick();
    }
  }, [saveState.soundEnabled]);

  // Theme Switch Handler
  const handleSelectTheme = useCallback((newThemeId: ThemeId) => {
    setCurrentThemeState(newThemeId);
    const updatedSave = setCurrentTheme(newThemeId);
    setSaveState(updatedSave);

    const newLevels = THEME_LEVELS[newThemeId] || THEME_LEVELS.cities;
    const targetThemeData = updatedSave.themeProgress[newThemeId] || { unlockedLevel: 1, progress: {} };
    const targetLevelId = Math.min(20, Math.max(1, targetThemeData.unlockedLevel));
    const targetLevel = newLevels.find((l) => l.id === targetLevelId) || newLevels[0];

    setCurrentLevel(targetLevel);
  }, []);

  // Preview Button Handler
  const handlePreviewClick = useCallback(() => {
    if (isPreviewActive) return;
    setHasUsedPreview(true);
    setIsPreviewActive(true);
    sound.playPreview();

    if (previewTimerRef.current) window.clearTimeout(previewTimerRef.current);
    previewTimerRef.current = window.setTimeout(() => {
      setIsPreviewActive(false);
    }, 2000);
  }, [isPreviewActive]);

  // Shuffle Tray Pieces
  const handleShuffleTray = useCallback(() => {
    sound.playClick();
    setUnplacedPieces((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  // Touch / Pointer Drag Start
  const handlePointerDownPiece = useCallback(
    (e: React.PointerEvent<HTMLDivElement>, piece: JigsawPieceData) => {
      e.preventDefault();
      sound.playPickup();

      isTouchRef.current = e.pointerType === 'touch' || e.pointerType === 'pen';

      const rect = e.currentTarget.getBoundingClientRect();
      const currentPos = { x: e.clientX, y: e.clientY };

      setDragStartPos({ x: rect.left, y: rect.top });
      setDragPos(currentPos);
      setDraggingPiece(piece);
      setIsNearSnap(false);
      setReturnPos(null);
    },
    []
  );

  // Global Pointer Events for Smooth Dragging & Snapping across devices
  useEffect(() => {
    if (!draggingPiece) return;

    const handlePointerMove = (e: PointerEvent) => {
      setDragPos({ x: e.clientX, y: e.clientY });

      if (!boardRef.current) return;
      const boardRect = boardRef.current.getBoundingClientRect();

      const scale = 600 / boardRect.width;
      const thumbClearance = isTouchRef.current ? 26 : 0;
      const curCenterX = (e.clientX - boardRect.left) * scale;
      const curCenterY = (e.clientY - boardRect.top - thumbClearance) * scale;

      const targetCenterX = draggingPiece.targetX + jigsaw.cellWidth / 2;
      const targetCenterY = draggingPiece.targetY + jigsaw.cellHeight / 2;

      const dist = Math.hypot(curCenterX - targetCenterX, curCenterY - targetCenterY);
      const snapThreshold = Math.max(38, Math.min(jigsaw.cellWidth, jigsaw.cellHeight) * 0.38);

      setIsNearSnap(dist <= snapThreshold);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!boardRef.current) {
        setDraggingPiece(null);
        return;
      }

      const boardRect = boardRef.current.getBoundingClientRect();
      const scale = 600 / boardRect.width;
      const thumbClearance = isTouchRef.current ? 26 : 0;
      const curCenterX = (e.clientX - boardRect.left) * scale;
      const curCenterY = (e.clientY - boardRect.top - thumbClearance) * scale;

      const targetCenterX = draggingPiece.targetX + jigsaw.cellWidth / 2;
      const targetCenterY = draggingPiece.targetY + jigsaw.cellHeight / 2;

      const dist = Math.hypot(curCenterX - targetCenterX, curCenterY - targetCenterY);
      const snapThreshold = Math.max(38, Math.min(jigsaw.cellWidth, jigsaw.cellHeight) * 0.38);

      if (dist <= snapThreshold) {
        // SUCCESSFUL SNAP! Lock piece onto board
        const snappedPiece = draggingPiece;
        sound.playSnap();

        setLockedPieceIds((prev) => {
          const next = new Set(prev);
          next.add(snappedPiece.id);

          // Check if all pieces completed!
          if (next.size === jigsaw.pieces.length) {
            setIsCompleted(true);
            const stars = hasUsedPreview ? 2 : 3;
            const updatedSave = updateLevelCompletion(currentTheme, currentLevel.id, stars);
            setSaveState(updatedSave);

            fireCelebrationConfetti();
            sound.playVictory();

            window.setTimeout(() => {
              setShowVictoryModal(true);
            }, 600);
          }

          return next;
        });

        // Remove from unplaced pieces
        setUnplacedPieces((prev) => prev.filter((p) => p.id !== snappedPiece.id));

        // Snap sparkle visual feedback
        setRecentSnapCoord({ x: targetCenterX, y: targetCenterY });
        if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);
        snapTimerRef.current = window.setTimeout(() => {
          setRecentSnapCoord(null);
        }, 500);

        setDraggingPiece(null);
        setIsNearSnap(false);
      } else {
        // INCORRECT PLACEMENT: Smoothly return back to tray
        sound.playReturn();
        setReturnPos(dragStartPos);

        window.setTimeout(() => {
          setDraggingPiece(null);
          setReturnPos(null);
          setIsNearSnap(false);
        }, 280);
      }
    };

    const handlePointerCancel = () => {
      setDraggingPiece(null);
      setIsNearSnap(false);
      setReturnPos(null);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerCancel);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerCancel);
    };
  }, [draggingPiece, jigsaw, dragStartPos, hasUsedPreview, currentLevel.id, currentTheme]);

  // Global Keyboard Shortcuts (F = Fullscreen, Space = Preview, P = Pause, M = Sound, S = Shuffle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        handleSoundToggle();
      } else if (screen === 'PLAYING') {
        if (e.code === 'Space') {
          e.preventDefault();
          handlePreviewClick();
        } else if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
          e.preventDefault();
          setScreen('PAUSED');
        } else if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
          handleShuffleTray();
        }
      } else if (screen === 'PAUSED' && (e.key === 'p' || e.key === 'P' || e.key === 'Escape')) {
        e.preventDefault();
        setScreen('PLAYING');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen, toggleFullscreen, handleSoundToggle, handlePreviewClick, handleShuffleTray]);

  // Level Complete Actions
  const handleNextLevel = () => {
    setShowVictoryModal(false);
    const nextIdx = currentLevel.id;
    if (nextIdx < activeLevels.length) {
      startLevel(activeLevels[nextIdx]);
    } else {
      setScreen('LEVEL_SELECT');
    }
  };

  const handleReplay = () => {
    setShowVictoryModal(false);
    startLevel(currentLevel);
  };

  const handleBackToLevels = () => {
    setScreen('LEVEL_SELECT');
  };

  const handleBackToMenu = () => {
    setScreen('MAIN_MENU');
  };

  const handlePlayCurrentLevel = () => {
    const curThemeData = saveState.themeProgress[currentTheme] || { unlockedLevel: 1, progress: {} };
    const curLevelId = Math.min(20, Math.max(1, curThemeData.unlockedLevel));
    const targetLvl = activeLevels.find((l) => l.id === curLevelId) || activeLevels[0];
    startLevel(targetLvl);
  };

  return (
    <div className="flex flex-col h-[100dvh] w-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* 1. MAIN MENU SCREEN */}
      {screen === 'MAIN_MENU' && (
        <MainMenu
          saveState={saveState}
          currentTheme={currentTheme}
          levels={activeLevels}
          isFullscreen={isFullscreen}
          onPlayCurrentLevel={handlePlayCurrentLevel}
          onOpenLevelSelect={() => setScreen('LEVEL_SELECT')}
          onOpenThemeSelect={() => setShowThemeModal(true)}
          onSoundToggle={handleSoundToggle}
          onToggleFullscreen={toggleFullscreen}
        />
      )}

      {/* 2. LEVEL SELECT SCREEN */}
      {screen === 'LEVEL_SELECT' && (
        <LevelSelect
          saveState={saveState}
          currentTheme={currentTheme}
          levels={activeLevels}
          isFullscreen={isFullscreen}
          onSelectLevel={startLevel}
          onBackToMenu={handleBackToMenu}
          onOpenThemeSelect={() => setShowThemeModal(true)}
          onSoundToggle={handleSoundToggle}
          onToggleFullscreen={toggleFullscreen}
        />
      )}

      {/* 3. PLAYING & PAUSED SCREENS */}
      {(screen === 'PLAYING' || screen === 'PAUSED') && (
        useSideTray ? (
          /* Landscape / Desktop / Tablet Wide Mode (Side-by-Side) */
          <div className="flex flex-col h-[100dvh] w-full max-w-7xl mx-auto px-3 sm:px-6 py-1 select-none overflow-hidden">
            {/* Game Header */}
            <GameHeader
              level={currentLevel}
              starsPotential={hasUsedPreview ? 2 : 3}
              hasUsedPreview={hasUsedPreview}
              isPreviewActive={isPreviewActive}
              soundEnabled={saveState.soundEnabled}
              isFullscreen={isFullscreen}
              onPreviewClick={handlePreviewClick}
              onPauseClick={() => setScreen('PAUSED')}
              onSoundToggle={handleSoundToggle}
              onBackToLevels={handleBackToLevels}
              onToggleFullscreen={toggleFullscreen}
            />

            {/* Side-by-side area: Board on Left, Tray on Right */}
            <div className="flex-1 flex flex-row items-center justify-between gap-4 sm:gap-6 py-2 overflow-hidden min-h-0">
              <main className="flex-1 flex items-center justify-center h-full min-w-0">
                <PuzzleBoard
                  level={currentLevel}
                  pieces={jigsaw.pieces}
                  fullPathGrid={jigsaw.fullPathGrid}
                  lockedPieceIds={lockedPieceIds}
                  activeSnapPieceId={isNearSnap && draggingPiece ? draggingPiece.id : null}
                  isPreviewActive={isPreviewActive}
                  isCompleted={isCompleted}
                  boardRef={boardRef}
                  recentSnapCoord={recentSnapCoord}
                  sizePx={boardSizePx}
                />
              </main>

              <aside className="w-72 lg:w-80 xl:w-96 h-full flex flex-col justify-center shrink-0">
                <PieceTray
                  level={currentLevel}
                  unplacedPieces={unplacedPieces}
                  totalPiecesCount={jigsaw.pieces.length}
                  cellWidth={jigsaw.cellWidth}
                  cellHeight={jigsaw.cellHeight}
                  boardWidth={jigsaw.boardWidth}
                  boardHeight={jigsaw.boardHeight}
                  draggingPieceId={draggingPiece ? draggingPiece.id : null}
                  onPointerDownPiece={handlePointerDownPiece}
                  onShuffleTray={handleShuffleTray}
                  orientation="vertical"
                  thumbSizePx={thumbSizePx}
                />
              </aside>
            </div>

            {/* Floating Drag Overlay */}
            {draggingPiece && (
              <DragOverlay
                level={currentLevel}
                piece={draggingPiece}
                pos={dragPos}
                boardRect={boardRef.current ? boardRef.current.getBoundingClientRect() : null}
                cellWidth={jigsaw.cellWidth}
                cellHeight={jigsaw.cellHeight}
                boardWidth={jigsaw.boardWidth}
                boardHeight={jigsaw.boardHeight}
                isNearSnap={isNearSnap}
                returnPos={returnPos}
                isTouch={isTouchRef.current}
              />
            )}

            {/* Pause Modal */}
            {screen === 'PAUSED' && (
              <PauseModal
                level={currentLevel}
                soundEnabled={saveState.soundEnabled}
                onResume={() => setScreen('PLAYING')}
                onRestart={() => startLevel(currentLevel)}
                onLevelSelect={handleBackToLevels}
                onSoundToggle={handleSoundToggle}
              />
            )}

            {/* Victory Modal */}
            {showVictoryModal && (
              <VictoryModal
                level={currentLevel}
                starsEarned={hasUsedPreview ? 2 : 3}
                hasNextLevel={currentLevel.id < activeLevels.length}
                onNextLevel={handleNextLevel}
                onReplay={handleReplay}
                onLevelSelect={handleBackToLevels}
              />
            )}
          </div>
        ) : (
          /* Portrait / Mobile Stacked Mode */
          <div className="flex flex-col h-[100dvh] w-full max-w-xl mx-auto px-2 py-1 justify-between select-none overflow-hidden">
            {/* Game Header */}
            <GameHeader
              level={currentLevel}
              starsPotential={hasUsedPreview ? 2 : 3}
              hasUsedPreview={hasUsedPreview}
              isPreviewActive={isPreviewActive}
              soundEnabled={saveState.soundEnabled}
              isFullscreen={isFullscreen}
              onPreviewClick={handlePreviewClick}
              onPauseClick={() => setScreen('PAUSED')}
              onSoundToggle={handleSoundToggle}
              onBackToLevels={handleBackToLevels}
              onToggleFullscreen={toggleFullscreen}
            />

            {/* Puzzle Board in Center */}
            <main className="flex-1 my-auto flex items-center justify-center min-h-0">
              <PuzzleBoard
                level={currentLevel}
                pieces={jigsaw.pieces}
                fullPathGrid={jigsaw.fullPathGrid}
                lockedPieceIds={lockedPieceIds}
                activeSnapPieceId={isNearSnap && draggingPiece ? draggingPiece.id : null}
                isPreviewActive={isPreviewActive}
                isCompleted={isCompleted}
                boardRef={boardRef}
                recentSnapCoord={recentSnapCoord}
                sizePx={boardSizePx}
              />
            </main>

            {/* Available Pieces Tray at Bottom */}
            <footer className="w-full mt-auto shrink-0 pb-1">
              <PieceTray
                level={currentLevel}
                unplacedPieces={unplacedPieces}
                totalPiecesCount={jigsaw.pieces.length}
                cellWidth={jigsaw.cellWidth}
                cellHeight={jigsaw.cellHeight}
                boardWidth={jigsaw.boardWidth}
                boardHeight={jigsaw.boardHeight}
                draggingPieceId={draggingPiece ? draggingPiece.id : null}
                onPointerDownPiece={handlePointerDownPiece}
                onShuffleTray={handleShuffleTray}
                orientation="horizontal"
                thumbSizePx={thumbSizePx}
              />
            </footer>

            {/* Floating Drag Overlay */}
            {draggingPiece && (
              <DragOverlay
                level={currentLevel}
                piece={draggingPiece}
                pos={dragPos}
                boardRect={boardRef.current ? boardRef.current.getBoundingClientRect() : null}
                cellWidth={jigsaw.cellWidth}
                cellHeight={jigsaw.cellHeight}
                boardWidth={jigsaw.boardWidth}
                boardHeight={jigsaw.boardHeight}
                isNearSnap={isNearSnap}
                returnPos={returnPos}
                isTouch={isTouchRef.current}
              />
            )}

            {/* Pause Modal */}
            {screen === 'PAUSED' && (
              <PauseModal
                level={currentLevel}
                soundEnabled={saveState.soundEnabled}
                onResume={() => setScreen('PLAYING')}
                onRestart={() => startLevel(currentLevel)}
                onLevelSelect={handleBackToLevels}
                onSoundToggle={handleSoundToggle}
              />
            )}

            {/* Victory Modal */}
            {showVictoryModal && (
              <VictoryModal
                level={currentLevel}
                starsEarned={hasUsedPreview ? 2 : 3}
                hasNextLevel={currentLevel.id < activeLevels.length}
                onNextLevel={handleNextLevel}
                onReplay={handleReplay}
                onLevelSelect={handleBackToLevels}
              />
            )}
          </div>
        )
      )}

      {/* 4. THEME SELECT MODAL (Global) */}
      {showThemeModal && (
        <ThemeSelectModal
          currentTheme={currentTheme}
          saveState={saveState}
          onSelectTheme={handleSelectTheme}
          onClose={() => setShowThemeModal(false)}
        />
      )}
    </div>
  );
}
