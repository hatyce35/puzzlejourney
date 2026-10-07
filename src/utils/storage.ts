import { GameSaveState, LevelProgress, ThemeId, ThemeSaveProgress } from '../types/game';

const STORAGE_KEY = 'world_heritage_jigsaw_save_v2';
const LEGACY_STORAGE_KEY = 'puzzle_journey_save_v1';

const DEFAULT_THEME_PROGRESS: Record<ThemeId, ThemeSaveProgress> = {
  cities: { unlockedLevel: 1, progress: {} },
  nature: { unlockedLevel: 1, progress: {} },
  night: { unlockedLevel: 1, progress: {} },
};

const DEFAULT_STATE: GameSaveState = {
  currentTheme: 'cities',
  themeProgress: DEFAULT_THEME_PROGRESS,
  soundEnabled: true,
};

export function loadGameSave(): GameSaveState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<GameSaveState>;
      const currentTheme = (parsed.currentTheme && ['cities', 'nature', 'night'].includes(parsed.currentTheme))
        ? parsed.currentTheme
        : 'cities';

      const themeProgress: Record<ThemeId, ThemeSaveProgress> = {
        cities: parsed.themeProgress?.cities || { unlockedLevel: 1, progress: {} },
        nature: parsed.themeProgress?.nature || { unlockedLevel: 1, progress: {} },
        night: parsed.themeProgress?.night || { unlockedLevel: 1, progress: {} },
      };

      return {
        currentTheme,
        themeProgress,
        soundEnabled: parsed.soundEnabled ?? true,
      };
    }

    // Attempt migration from v1 legacy key
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw) {
      const legacyParsed = JSON.parse(legacyRaw) as {
        unlockedLevel?: number;
        progress?: Record<number, LevelProgress>;
        soundEnabled?: boolean;
      };

      const migrated: GameSaveState = {
        currentTheme: 'cities',
        themeProgress: {
          cities: {
            unlockedLevel: legacyParsed.unlockedLevel || 1,
            progress: legacyParsed.progress || {},
          },
          nature: { unlockedLevel: 1, progress: {} },
          night: { unlockedLevel: 1, progress: {} },
        },
        soundEnabled: legacyParsed.soundEnabled ?? true,
      };
      saveGameSave(migrated);
      return migrated;
    }

    return DEFAULT_STATE;
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveGameSave(state: GameSaveState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save game state to localStorage:', e);
  }
}

export function updateLevelCompletion(
  themeId: ThemeId,
  levelId: number,
  stars: number
): GameSaveState {
  const current = loadGameSave();
  const themeData = current.themeProgress[themeId] || { unlockedLevel: 1, progress: {} };
  const existing = themeData.progress[levelId];
  const bestStars = existing ? Math.max(existing.stars, stars) : stars;

  const nextUnlocked = Math.max(themeData.unlockedLevel, Math.min(20, levelId + 1));

  const updatedThemeProgress: Record<number, LevelProgress> = {
    ...themeData.progress,
    [levelId]: {
      completed: true,
      stars: bestStars,
      completedAt: Date.now(),
    },
  };

  const newState: GameSaveState = {
    ...current,
    themeProgress: {
      ...current.themeProgress,
      [themeId]: {
        unlockedLevel: nextUnlocked,
        progress: updatedThemeProgress,
      },
    },
  };

  saveGameSave(newState);
  return newState;
}

export function setCurrentTheme(themeId: ThemeId): GameSaveState {
  const current = loadGameSave();
  const newState: GameSaveState = {
    ...current,
    currentTheme: themeId,
  };
  saveGameSave(newState);
  return newState;
}

export function setSoundSetting(enabled: boolean): GameSaveState {
  const current = loadGameSave();
  const newState: GameSaveState = {
    ...current,
    soundEnabled: enabled,
  };
  saveGameSave(newState);
  return newState;
}
