import React from 'react';
import { Play, Grid, Volume2, VolumeX, Sparkles, Star, Palette, ChevronRight } from 'lucide-react';
import { GameSaveState, LevelDefinition, ThemeId } from '../types/game';
import { AVAILABLE_THEMES } from '../data/themes';

interface MainMenuProps {
  saveState: GameSaveState;
  currentTheme: ThemeId;
  levels: LevelDefinition[];
  onPlayCurrentLevel: () => void;
  onOpenLevelSelect: () => void;
  onOpenThemeSelect: () => void;
  onSoundToggle: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  saveState,
  currentTheme,
  levels,
  onPlayCurrentLevel,
  onOpenLevelSelect,
  onOpenThemeSelect,
  onSoundToggle,
}) => {
  const themeData = saveState.themeProgress[currentTheme] || { unlockedLevel: 1, progress: {} };
  const currentLevelId = Math.min(20, Math.max(1, themeData.unlockedLevel));
  const currentLevel = levels.find((l) => l.id === currentLevelId) || levels[0];

  const totalStars = Object.values(themeData.progress).reduce(
    (acc, p) => acc + (p.completed ? p.stars : 0),
    0
  );
  const completedCount = Object.values(themeData.progress).filter((p) => p.completed).length;
  const activeThemeMeta = AVAILABLE_THEMES.find((t) => t.id === currentTheme) || AVAILABLE_THEMES[0];

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-between min-h-full py-4 px-4 select-none text-center">
      {/* Top Bar: Theme Badge & Sound toggle */}
      <div className="w-full flex items-center justify-between">
        {/* Quick Theme Selector Button */}
        <button
          type="button"
          onClick={onOpenThemeSelect}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-50 dark:bg-slate-800/90 border border-amber-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-100 shadow-xs hover:border-amber-400 active:scale-95 transition-all"
        >
          <Palette className="w-3.5 h-3.5 text-amber-500" />
          <span className="truncate max-w-[140px]">{activeThemeMeta.name}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </button>

        {/* Sound Toggle */}
        <button
          type="button"
          onClick={onSoundToggle}
          className="p-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 shadow-xs border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 active:scale-95 transition-transform"
          title={saveState.soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
        >
          {saveState.soundEnabled ? (
            <Volume2 className="w-4 h-4 text-emerald-500" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </button>
      </div>

      {/* Hero Branding */}
      <div className="flex flex-col items-center my-auto py-3">
        {/* Animated Jigsaw Icon / Showcase */}
        <div className="relative w-36 h-36 rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-pink-500 p-1.5 shadow-2xl shadow-orange-500/25 mb-3 animate-bounce-subtle">
          <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 border-2 border-white/40">
            <svg viewBox="0 0 600 600" className="w-full h-full">
              {currentLevel.renderIllustration(600, 600)}
            </svg>
          </div>
          {/* Sparkle badge */}
          <div className="absolute -top-2 -right-2 bg-amber-300 text-slate-900 p-1.5 rounded-full shadow-md animate-pulse">
            <Sparkles className="w-4 h-4 fill-slate-900" />
          </div>
        </div>

        <span className="text-[11px] uppercase tracking-widest font-black text-amber-600 dark:text-amber-400">
          {activeThemeMeta.name.toUpperCase()}
        </span>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-0.5 mb-1.5">
          PUZZLE GALLERY
        </h1>
        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed font-medium">
          {activeThemeMeta.description}
        </p>

        {/* Stats Pill */}
        <div className="flex items-center gap-3 mt-3 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{totalStars} / 60</span>
          </div>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span>Bölüm {currentLevelId} / 20</span>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="w-full flex flex-col gap-2.5 mt-auto">
        <button
          type="button"
          onClick={onPlayCurrentLevel}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 hover:from-amber-600 hover:to-orange-600 active:scale-[0.98] text-white font-black text-lg tracking-wide shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2.5 transition-all"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>{completedCount === 0 ? 'OYUNA BAŞLA' : `DEVAM ET (BÖLÜM ${currentLevelId})`}</span>
        </button>

        <button
          type="button"
          onClick={onOpenLevelSelect}
          className="w-full py-3 px-6 rounded-2xl bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98] border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-all"
        >
          <Grid className="w-4 h-4" />
          <span>BÖLÜM SEÇİMİ ({completedCount}/20)</span>
        </button>

        <button
          type="button"
          onClick={onOpenThemeSelect}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-[0.98] text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Palette className="w-3.5 h-3.5 text-amber-500" />
          <span>Temayı Değiştir ({AVAILABLE_THEMES.length} Tema Mevcut)</span>
        </button>
      </div>
    </div>
  );
};
