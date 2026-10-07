import React from 'react';
import { JigsawPieceData, LevelDefinition } from '../types/game';
import { PieceThumbnail } from './PieceThumbnail';
import { Shuffle } from 'lucide-react';

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
}) => {
  const remainingCount = unplacedPieces.length;
  const placedCount = totalPiecesCount - remainingCount;

  return (
    <div className="w-full flex flex-col gap-2 select-none">
      {/* Tray status header */}
      <div className="flex items-center justify-between px-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            Available Pieces
          </span>
          <span className="text-slate-500 dark:text-slate-400 font-medium">
            ({remainingCount} left · {placedCount}/{totalPiecesCount})
          </span>
        </div>

        {remainingCount > 1 && (
          <button
            type="button"
            onClick={onShuffleTray}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
            title="Shuffle pieces order"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle</span>
          </button>
        )}
      </div>

      {/* Tray Container */}
      <div
        className="w-full bg-slate-100/90 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-inner"
        style={{ minHeight: '100px' }}
      >
        {unplacedPieces.length === 0 ? (
          <div className="h-20 flex items-center justify-center text-sm font-semibold text-amber-600 dark:text-amber-400">
            ✨ All pieces in place!
          </div>
        ) : (
          <div
            className="flex items-center gap-3 overflow-x-auto pb-1 px-1 scroll-smooth touch-pan-x"
            style={{
              scrollbarWidth: 'thin',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {unplacedPieces.map(piece => (
              <PieceThumbnail
                key={piece.id}
                piece={piece}
                level={level}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                boardWidth={boardWidth}
                boardHeight={boardHeight}
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
