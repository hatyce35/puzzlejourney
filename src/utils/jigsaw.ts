import { JigsawPieceData } from '../types/game';

interface Point {
  x: number;
  y: number;
}

// Generates an edge path segment between p0 and p1
// sideSign: 0 for flat, 1 for tab outward, -1 for hole inward
// Generates an edge path segment between p0 and p1
// sideSign: 0 for flat border, 1 for tab outward, -1 for hole inward
// Clean flat joining baselines with a perfectly circular tab/hole
function generateEdgeSegment(p0: Point, p1: Point, sideSign: number): string {
  if (sideSign === 0) {
    return `L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`;
  }

  const dx = p1.x - p0.x;
  const dy = p1.y - p0.y;
  const L = Math.hypot(dx, dy);
  if (L === 0) return `L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`;

  // Unit tangent
  const tx = dx / L;
  const ty = dy / L;

  // Unit outward normal for clockwise winding: (ty, -tx) scaled by sideSign
  const nx = ty * sideSign;
  const ny = -tx * sideSign;

  const pt = (s: number, n: number): Point => ({
    x: p0.x + s * L * tx + n * L * nx,
    y: p0.y + s * L * ty + n * L * ny,
  });

  // Flat baseline from 0 to 0.38
  const pFlat1 = pt(0.38, 0.0);

  // Fillet curve from straight edge into narrow neck
  const f1 = pt(0.40, 0.0);
  const f2 = pt(0.41, 0.03);
  const pNeckIn = pt(0.42, 0.07);

  // Perfectly circular head bulb (centered around s=0.50, n=0.19, radius r=0.13)
  // Left lobe
  const cLeft1 = pt(0.34, 0.10);
  const cLeft2 = pt(0.34, 0.22);
  const pTopLeft = pt(0.41, 0.29);

  // Apex dome
  const cApex1 = pt(0.45, 0.32);
  const cApex2 = pt(0.47, 0.32);
  const pApex = pt(0.50, 0.32);

  // Right dome
  const cApex3 = pt(0.53, 0.32);
  const cApex4 = pt(0.55, 0.32);
  const pTopRight = pt(0.59, 0.29);

  // Right lobe to neck
  const cRight1 = pt(0.66, 0.22);
  const cRight2 = pt(0.66, 0.10);
  const pNeckOut = pt(0.58, 0.07);

  // Fillet curve out of neck back to straight baseline
  const f3 = pt(0.59, 0.03);
  const f4 = pt(0.60, 0.0);
  const pFlat2 = pt(0.62, 0.0);

  return [
    `L ${pFlat1.x.toFixed(2)} ${pFlat1.y.toFixed(2)}`,
    `C ${f1.x.toFixed(2)} ${f1.y.toFixed(2)}, ${f2.x.toFixed(2)} ${f2.y.toFixed(2)}, ${pNeckIn.x.toFixed(2)} ${pNeckIn.y.toFixed(2)}`,
    `C ${cLeft1.x.toFixed(2)} ${cLeft1.y.toFixed(2)}, ${cLeft2.x.toFixed(2)} ${cLeft2.y.toFixed(2)}, ${pTopLeft.x.toFixed(2)} ${pTopLeft.y.toFixed(2)}`,
    `C ${cApex1.x.toFixed(2)} ${cApex1.y.toFixed(2)}, ${cApex2.x.toFixed(2)} ${cApex2.y.toFixed(2)}, ${pApex.x.toFixed(2)} ${pApex.y.toFixed(2)}`,
    `C ${cApex3.x.toFixed(2)} ${cApex3.y.toFixed(2)}, ${cApex4.x.toFixed(2)} ${cApex4.y.toFixed(2)}, ${pTopRight.x.toFixed(2)} ${pTopRight.y.toFixed(2)}`,
    `C ${cRight1.x.toFixed(2)} ${cRight1.y.toFixed(2)}, ${cRight2.x.toFixed(2)} ${cRight2.y.toFixed(2)}, ${pNeckOut.x.toFixed(2)} ${pNeckOut.y.toFixed(2)}`,
    `C ${f3.x.toFixed(2)} ${f3.y.toFixed(2)}, ${f4.x.toFixed(2)} ${f4.y.toFixed(2)}, ${pFlat2.x.toFixed(2)} ${pFlat2.y.toFixed(2)}`,
    `L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
  ].join(' ');
}

// Pseudo-random deterministic seed for reproducible jigsaw cuts per level
function seededSign(levelId: number, seedKey: number): number {
  const x = Math.sin(levelId * 997 + seedKey * 7919) * 10000;
  return (x - Math.floor(x)) > 0.5 ? 1 : -1;
}

export interface GeneratedJigsawLevel {
  pieces: JigsawPieceData[];
  boardWidth: number;
  boardHeight: number;
  cellWidth: number;
  cellHeight: number;
  fullPathGrid: string; // for rendering faint board cut-guides
}

export function generateJigsawPuzzle(
  levelId: number,
  rows: number,
  cols: number,
  boardWidth = 600,
  boardHeight = 600
): GeneratedJigsawLevel {
  const cellWidth = boardWidth / cols;
  const cellHeight = boardHeight / rows;

  // Horizontal edges: rows - 1 dividers, each has cols edges
  // horizEdges[r][c]: tab orientation of edge between cell (r, c) and (r+1, c)
  // +1 means tab points down (outward for cell r, inward for cell r+1)
  const horizEdges: number[][] = [];
  for (let r = 0; r < rows - 1; r++) {
    horizEdges[r] = [];
    for (let c = 0; c < cols; c++) {
      horizEdges[r][c] = seededSign(levelId, r * 100 + c);
    }
  }

  // Vertical edges: rows dividers, each has cols - 1 edges
  // vertEdges[r][c]: tab orientation of edge between cell (r, c) and (r, c+1)
  // +1 means tab points right (outward for cell c, inward for cell c+1)
  const vertEdges: number[][] = [];
  for (let r = 0; r < rows; r++) {
    vertEdges[r] = [];
    for (let c = 0; c < cols - 1; c++) {
      vertEdges[r][c] = seededSign(levelId, 10000 + r * 100 + c);
    }
  }

  const pieces: JigsawPieceData[] = [];
  const allCutPaths: string[] = [];

  let pieceId = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x0 = c * cellWidth;
      const y0 = r * cellHeight;
      const x1 = x0 + cellWidth;
      const y1 = y0 + cellHeight;

      // Top edge
      // For r=0: flat border (0)
      // For r>0: horizEdges[r-1][c] tab points down. For row r, outward is UP.
      // So if horizEdge is +1 (down), it is a HOLE (-1) for this row.
      const topSign = r === 0 ? 0 : -horizEdges[r - 1][c];

      // Right edge
      // For c=cols-1: flat border (0)
      // For c<cols-1: vertEdges[r][c] tab points right. Outward is RIGHT. So +vertEdges[r][c].
      const rightSign = c === cols - 1 ? 0 : vertEdges[r][c];

      // Bottom edge
      // For r=rows-1: flat border (0)
      // For r<rows-1: horizEdges[r][c] tab points down. Outward is DOWN. So +horizEdges[r][c].
      const bottomSign = r === rows - 1 ? 0 : horizEdges[r][c];

      // Left edge
      // For c=0: flat border (0)
      // For c>0: vertEdges[r][c-1] tab points right. Outward is LEFT. So -vertEdges[r][c-1].
      const leftSign = c === 0 ? 0 : -vertEdges[r][c - 1];

      // Build path starting at Top-Left (x0, y0) clockwise:
      // Top: (x0, y0) -> (x1, y0)
      // Right: (x1, y0) -> (x1, y1)
      // Bottom: (x1, y1) -> (x0, y1)
      // Left: (x0, y1) -> (x0, y0)
      const pTop = generateEdgeSegment({ x: x0, y: y0 }, { x: x1, y: y0 }, topSign);
      const pRight = generateEdgeSegment({ x: x1, y: y0 }, { x: x1, y: y1 }, rightSign);
      const pBottom = generateEdgeSegment({ x: x1, y: y1 }, { x: x0, y: y1 }, bottomSign);
      const pLeft = generateEdgeSegment({ x: x0, y: y1 }, { x: x0, y: y0 }, leftSign);

      const pathD = `M ${x0.toFixed(2)} ${y0.toFixed(2)} ${pTop} ${pRight} ${pBottom} ${pLeft} Z`;
      allCutPaths.push(pathD);

      pieces.push({
        id: pieceId++,
        row: r,
        col: c,
        topEdge: topSign,
        rightEdge: rightSign,
        bottomEdge: bottomSign,
        leftEdge: leftSign,
        pathD,
        targetX: x0,
        targetY: y0,
        isLocked: false,
      });
    }
  }

  return {
    pieces,
    boardWidth,
    boardHeight,
    cellWidth,
    cellHeight,
    fullPathGrid: allCutPaths.join(' '),
  };
}

// Calculates piece bounding box including protruding tabs
export function getPieceBoundingBox(
  piece: JigsawPieceData,
  cellWidth: number,
  cellHeight: number,
  boardWidth = 600,
  boardHeight = 600
) {
  const x0 = piece.col * cellWidth;
  const y0 = piece.row * cellHeight;
  const tabMax = Math.max(cellWidth, cellHeight) * 0.35;

  const minX = Math.max(0, x0 - (piece.leftEdge === 1 ? tabMax : 0));
  const maxX = Math.min(boardWidth, x0 + cellWidth + (piece.rightEdge === 1 ? tabMax : 0));
  const minY = Math.max(0, y0 - (piece.topEdge === 1 ? tabMax : 0));
  const maxY = Math.min(boardHeight, y0 + cellHeight + (piece.bottomEdge === 1 ? tabMax : 0));

  return {
    minX,
    minY,
    width: maxX - minX,
    height: maxY - minY,
    offsetX: minX - x0,
    offsetY: minY - y0,
  };
}
