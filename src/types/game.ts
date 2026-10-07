export type ThemeId = 'cities' | 'nature' | 'night';

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  icon: string;
  accentGradient: string;
}

export interface LevelProgress {
  completed: boolean;
  stars: number; // 1, 2, or 3
  completedAt?: number;
}

export interface ThemeSaveProgress {
  unlockedLevel: number; // 1 to 20
  progress: Record<number, LevelProgress>;
}

export interface GameSaveState {
  currentTheme: ThemeId;
  themeProgress: Record<ThemeId, ThemeSaveProgress>;
  // Backwards compatibility legacy fields
  unlockedLevel?: number;
  progress?: Record<number, LevelProgress>;
  soundEnabled: boolean;
}

export interface LevelDefinition {
  id: number;
  title: string;
  category: 'Tarihi Başkentler' | 'Akdeniz İncileri' | 'Doğu Harikaları' | 'Dünya Mirasları' | string;
  city?: string;
  country?: string;
  rows: number;
  cols: number;
  description: string;
  imageUrl?: string;
  renderIllustration: (width: number, height: number) => React.ReactNode;
}

export interface JigsawPieceData {
  id: number;
  row: number;
  col: number;
  topEdge: number; // 0: flat border, 1: tab out, -1: hole in
  rightEdge: number;
  bottomEdge: number;
  leftEdge: number;
  pathD: string; // SVG path
  targetX: number; // Normalized board X (0..1) or pixel
  targetY: number; // Normalized board Y (0..1)
  isLocked: boolean;
}

export type ScreenState = 'MAIN_MENU' | 'LEVEL_SELECT' | 'PLAYING' | 'PAUSED';
