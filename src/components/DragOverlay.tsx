import React from 'react';
import { JigsawPieceData, LevelDefinition } from '../types/game';
import { getPieceBoundingBox } from '../utils/jigsaw';

interface DragOverlayProps {
  level: LevelDefinition;
  piece: JigsawPieceData;
  pos: { x: number; y: number }; // clientX, clientY
  boardRect: DOMRect | null;
  cellWidth: number;
  cellHeight: number;
  boardWidth: number;
  boardHeight: number;
  isNearSnap: boolean;
  returnPos?: { x: number; y: number } | null;
  isTouch?: boolean;
}

export const DragOverlay: React.FC<DragOverlayProps> = ({
  level,
  piece,
  pos,
  boardRect,
  cellWidth,
  cellHeight,
  boardWidth,
  boardHeight,
  isNearSnap,
  returnPos,
  isTouch = false,
}) => {
  const bbox = getPieceBoundingBox(piece, cellWidth, cellHeight, boardWidth, boardHeight);

  // If boardRect is available, scale piece to match board's current screen scale
  const scale = boardRect ? boardRect.width / boardWidth : 0.6;
  const pieceWidthPx = bbox.width * scale;
  const pieceHeightPx = bbox.height * scale;

  // Center the cell on the pointer (with slight upward offset on touch so thumb doesn't hide it)
  const cellCenterOffsetX = (piece.col * cellWidth + cellWidth / 2 - bbox.minX) * scale;
  const cellCenterOffsetY = (piece.row * cellHeight + cellHeight / 2 - bbox.minY) * scale;

  const thumbClearance = isTouch ? 26 : 0;
  const currentX = (returnPos ? returnPos.x : pos.x) - cellCenterOffsetX;
  const currentY = (returnPos ? returnPos.y : pos.y) - cellCenterOffsetY - thumbClearance;

  return (
    <div
      className={`fixed z-50 pointer-events-none select-none transition-transform ${
        returnPos ? 'duration-300 ease-out' : 'duration-0'
      }`}
      style={{
        left: 0,
        top: 0,
        width: `${pieceWidthPx}px`,
        height: `${pieceHeightPx}px`,
        transform: `translate3d(${currentX}px, ${currentY}px, 0) scale(${isNearSnap ? 1.02 : 1.05})`,
        filter: isNearSnap
          ? 'drop-shadow(0 0 16px rgba(255, 215, 0, 0.8)) drop-shadow(0 14px 20px rgba(0,0,0,0.5))'
          : 'drop-shadow(0 12px 24px rgba(0,0,0,0.45))',
      }}
    >
      <svg
        viewBox={`${bbox.minX} ${bbox.minY} ${bbox.width} ${bbox.height}`}
        className="w-full h-full overflow-visible"
      >
        <defs>
          <clipPath id={`drag-clip-${level.id}-${piece.id}`}>
            <path d={piece.pathD} />
          </clipPath>
        </defs>

        <g clipPath={`url(#drag-clip-${level.id}-${piece.id})`}>
          {level.renderIllustration(boardWidth, boardHeight)}
        </g>

        {/* Tactile border and gloss */}
        <path
          d={piece.pathD}
          fill="none"
          stroke={isNearSnap ? '#FFD54F' : 'rgba(255, 255, 255, 0.8)'}
          strokeWidth={isNearSnap ? 4 : 2.5}
        />
        <path
          d={piece.pathD}
          fill="none"
          stroke="rgba(0, 0, 0, 0.3)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
