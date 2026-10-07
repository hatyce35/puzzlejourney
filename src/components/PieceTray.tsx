import React from 'react';
import { JigsawPieceData, LevelDefinition } from '../types/game';
import { PieceThumbnail } from './PieceThumbnail';
import { Shuffle, Layers } from 'lucide-react';

interface PieceTrayProps {
  level: LevelDefinition;
  unplacedPieces: JigsawPieceData[];
  totalPiecesCount: number;
  cellWidth: number;
  cellHeight: number;
  boardWidth: number;
  boardHeight: number;
  draggingPieceId: number | null;
  onPointerDownPiece: (e: React.PointerEvent<HTMLDivElement>, piece: JigsawPieceData) => void;
  onShuffleTray: () => void;
  orientation?: 'horizontal' | 'vertical';
  thumbSizePx?: number;
}

export const PieceTray: React.FC<PieceTrayProps> = ({
  level,
  unplacedPieces,
  totalPiecesCount,
  cellWidth,
  cellHeight,
  boardWidth,
  boardHeight,
  draggingPieceId,
  onPointerDownPiece,
  onShuffleTray,
  orientation = 'horizontal',
  thumbSizePx = 76,
}) => {
  const remainingCount = unplacedPieces.length;
  const placedCount = totalPiecesCount - remainingCount;
  const isVertical = orientation === 'vertical';

  if (isVertical) {
    return (
      <div className="w-full h-full flex flex-col rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xl p-3 sm:p-4 select-none overflow-hidden">
        {/* Side Tray Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800 mb-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Parçalar</span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="font-bold text-slate-800 dark:text-slate-100">{remainingCount}</span> kalan ·{' '}
              <span>{placedCount}/{totalPiecesCount}</span>
            </div>
          </div>

          {remainingCount > 1 && (
            <button
              type="button"
              onClick={onShuffleTray}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-xs active:scale-95 transition-all"
              title="Parçaları Karıştır"
            >
              <Shuffle className="w-3.5 h-3.5 text-amber-500" />
              <span>Karıştır</span>
            </button>
          )}
        </div>

        {/* Vertical Scroll Grid */}
        <div className="flex-1 overflow-y-auto pr-1">
          {unplacedPieces.length === 0 ? (
            <div className="h-48 flex flex-col items-center justify-center text-center p-4 text-emerald-600 dark:text-emerald-400 font-bold gap-2">
              <span className="text-3xl">🎉</span>
              <span>Tüm parçalar yerleştirildi!</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-2.5 p-1 place-items-center">
              {unplacedPieces.map((piece) => (
                <PieceThumbnail
                  key={piece.id}
                  piece={piece}
                  level={level}
                  cellWidth={cellWidth}
                  cellHeight={cellHeight}
                  boardWidth={boardWidth}
                  boardHeight={boardHeight}
                  sizePx={thumbSizePx}
                  isSelected={draggingPieceId === piece.id}
                  onPointerDown={onPointerDownPiece}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Horizontal Layout (for Mobile and Stacked Views)
  return (
    <div className="w-full flex flex-col gap-1.5 select-none">
      {/* Tray status bar */}
      <div className="flex items-center justify-between px-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-700 dark:text-slate-200">
            Kalan Parçalar
          </span>
          <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px]">
            ({remainingCount} adet · {placedCount}/{totalPiecesCount})
          </span>
        </div>

        {remainingCount > 1 && (
          <button
            type="button"
            onClick={onShuffleTray}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-semibold transition-colors active:scale-95 shadow-xs"
            title="Parçaların sırasını karıştır"
          >
            <Shuffle className="w-3 h-3 text-amber-500" />
            <span>Karıştır</span>
          </button>
        )}
      </div>

      {/* Tray Horizontal Container */}
      <div
        className="w-full bg-slate-100/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-2 border border-slate-200 dark:border-slate-800 shadow-inner overflow-hidden"
        style={{ minHeight: `${thumbSizePx + 16}px` }}
      >
        {unplacedPieces.length === 0 ? (
          <div
            className="flex items-center justify-center text-xs font-bold text-amber-600 dark:text-amber-400"
            style={{ height: `${thumbSizePx}px` }}
          >
            ✨ Harika! Tüm parçalar doğru yerinde!
          </div>
        ) : (
          <div
            className="flex items-center gap-2.5 overflow-x-auto pb-1 px-1 scroll-smooth touch-pan-x"
            style={{
              scrollbarWidth: 'thin',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {unplacedPieces.map((piece) => (
              <PieceThumbnail
                key={piece.id}
                piece={piece}
                level={level}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                boardWidth={boardWidth}
                boardHeight={boardHeight}
                sizePx={thumbSizePx}
                isSelected={draggingPieceId === piece.id}
                onPointerDown={onPointerDownPiece}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
