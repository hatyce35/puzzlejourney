import React from 'react';
import { JigsawPieceData, LevelDefinition } from '../types/game';
import { getPieceBoundingBox } from '../utils/jigsaw';

interface PieceThumbnailProps {
  piece: JigsawPieceData;
  level: LevelDefinition;
  cellWidth: number;
  cellHeight: number;
  boardWidth: number;
  boardHeight: number;
  isSelected?: boolean;
  sizePx?: number;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>, piece: JigsawPieceData) => void;
}

export const PieceThumbnail: React.FC<PieceThumbnailProps> = ({
  piece,
  level,
  cellWidth,
  cellHeight,
  boardWidth,
  boardHeight,
  isSelected,
  sizePx = 76,
  onPointerDown,
}) => {
  const bbox = getPieceBoundingBox(piece, cellWidth, cellHeight, boardWidth, boardHeight);

  // Add small padding to bbox so tabs don't touch edges of the viewbox
  const pad = Math.max(cellWidth, cellHeight) * 0.08;
  const vbX = bbox.minX - pad;
  const vbY = bbox.minY - pad;
  const vbW = bbox.width + pad * 2;
  const vbH = bbox.height + pad * 2;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Puzzle piece row ${piece.row + 1} column ${piece.col + 1}`}
      onPointerDown={(e) => onPointerDown(e, piece)}
      className={`relative shrink-0 touch-none cursor-grab active:cursor-grabbing select-none transition-transform duration-150 ${
        isSelected ? 'opacity-30 scale-95' : 'hover:scale-105 active:scale-95'
      }`}
      style={{
        width: `${sizePx}px`,
        height: `${sizePx}px`,
      }}
    >
      {/* Background card with tactile drop shadow */}
      <div className="absolute inset-0 rounded-2xl bg-white/90 dark:bg-slate-800/90 shadow-md border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center p-1.5 transition-shadow">
        <svg
          viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] overflow-visible"
        >
          <defs>
            <clipPath id={`thumb-clip-${level.id}-${piece.id}`}>
              <path d={piece.pathD} />
            </clipPath>
          </defs>
          <g clipPath={`url(#thumb-clip-${level.id}-${piece.id})`}>
            {level.renderIllustration(boardWidth, boardHeight)}
          </g>
          {/* Subtle puzzle piece edge bevel */}
          <path
            d={piece.pathD}
            fill="none"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="3"
          />
          <path
            d={piece.pathD}
            fill="none"
            stroke="rgba(0, 0, 0, 0.25)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};
