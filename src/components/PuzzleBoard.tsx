import React from 'react';
import { JigsawPieceData, LevelDefinition } from '../types/game';

interface PuzzleBoardProps {
  level: LevelDefinition;
  pieces: JigsawPieceData[];
  fullPathGrid: string;
  lockedPieceIds: Set<number>;
  activeSnapPieceId: number | null;
  isPreviewActive: boolean;
  isCompleted: boolean;
  boardRef: React.RefObject<HTMLDivElement | null>;
  recentSnapCoord: { x: number; y: number } | null;
  sizePx?: number;
}

export const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
  level,
  pieces,
  fullPathGrid,
  lockedPieceIds,
  activeSnapPieceId,
  isPreviewActive,
  isCompleted,
  boardRef,
  recentSnapCoord,
  sizePx,
}) => {
  const activeSnapPiece = activeSnapPieceId !== null ? pieces.find(p => p.id === activeSnapPieceId) : null;

  return (
    <div className="w-full h-full flex items-center justify-center select-none p-1 sm:p-2">
      {/* Outer tactile frame representing wooden puzzle board mat */}
      <div
        className={`relative aspect-square rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-amber-950/85 via-amber-900/75 to-stone-900 shadow-2xl border-2 sm:border-4 border-amber-800/60 transition-transform duration-500 ${
          isCompleted ? 'scale-[1.02] shadow-amber-500/25' : ''
        }`}
        style={{
          width: sizePx ? `${sizePx}px` : '100%',
          height: sizePx ? `${sizePx}px` : '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          boxShadow: '0 20px 35px -10px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.15)',
        }}
      >
        {/* Inner Puzzle Canvas Surface - boardRef attached here for 1:1 mathematical accuracy */}
        <div
          ref={boardRef}
          className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-inner"
        >
          <svg
            viewBox="0 0 600 600"
            className="w-full h-full block"
            style={{ shapeRendering: 'geometricPrecision' }}
          >
            <defs>
              {/* Radial gradient for the felt board mat */}
              <radialGradient id="board-mat-grad" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#252D3A" />
                <stop offset="100%" stopColor="#141923" />
              </radialGradient>

              {/* ClipPaths for each piece */}
              {pieces.map(piece => (
                <clipPath key={piece.id} id={`board-clip-${level.id}-${piece.id}`}>
                  <path d={piece.pathD} />
                </clipPath>
              ))}
            </defs>

            {/* Board Background Surface */}
            <rect width="600" height="600" fill="url(#board-mat-grad)" />

            {/* Subtle Grid guides showing jigsaw shapes */}
            <path
              d={fullPathGrid}
              fill="none"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.8"
              strokeDasharray="6 4"
            />

            {/* Active Snap Target Highlight: Lights up warmly when piece is over its slot */}
            {activeSnapPiece && (
              <g className="transition-all duration-200 animate-pulse">
                {/* Outer luminous glow aura */}
                <path
                  d={activeSnapPiece.pathD}
                  fill="none"
                  stroke="#FFD54F"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.5"
                />
                {/* Core bright light */}
                <path
                  d={activeSnapPiece.pathD}
                  fill="rgba(255, 235, 59, 0.28)"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}

            {/* Locked / Placed Pieces */}
            {pieces
              .filter(p => lockedPieceIds.has(p.id))
              .map(piece => (
                <g key={piece.id} className="transition-opacity duration-200">
                  <g clipPath={`url(#board-clip-${level.id}-${piece.id})`}>
                    {level.renderIllustration(600, 600)}
                  </g>
                  {/* Subtle bevel line separating locked pieces */}
                  <path
                    d={piece.pathD}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.35)"
                    strokeWidth="2"
                  />
                  <path
                    d={piece.pathD}
                    fill="none"
                    stroke="rgba(0, 0, 0, 0.2)"
                    strokeWidth="1"
                  />
                </g>
              ))}

            {/* Snap Sparkle Burst Effect */}
            {recentSnapCoord && (
              <g transform={`translate(${recentSnapCoord.x}, ${recentSnapCoord.y})`}>
                <circle cx="0" cy="0" r="30" fill="none" stroke="#FFD54F" strokeWidth="4" opacity="0.8" className="animate-ping" />
                <circle cx="0" cy="0" r="10" fill="#FFF" opacity="0.9" />
                {/* 4 small sparkle stars */}
                <path d="M 0 -25 L 3 -8 L 20 0 L 3 8 L 0 25 L -3 8 L -20 0 L -3 -8 Z" fill="#FFE082" />
              </g>
            )}

            {/* Completed Full Picture Border Flare */}
            {isCompleted && (
              <rect
                width="600"
                height="600"
                fill="none"
                stroke="#FFD54F"
                strokeWidth="6"
                opacity="0.7"
                rx="16"
              />
            )}
          </svg>

          {/* Preview Overlay (when Preview button tapped) */}
          <div
            className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 flex items-center justify-center ${
              isPreviewActive ? 'opacity-95' : 'opacity-0'
            }`}
          >
            <svg viewBox="0 0 600 600" className="w-full h-full">
              {level.renderIllustration(600, 600)}
            </svg>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-400/50 text-amber-300 text-xs font-semibold tracking-wide shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Previewing completed image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
