import React, { useState } from 'react';
import { Lock, Star, ArrowLeft, Volume2, VolumeX, Palette } from 'lucide-react';
import { GameSaveState, LevelDefinition, ThemeId } from '../types/game';
import { AVAILABLE_THEMES } from '../data/themes';

interface LevelSelectProps {
  saveState: GameSaveState;
  currentTheme: ThemeId;
  levels: LevelDefinition[];
  onSelectLevel: (level: LevelDefinition) => void;
  onBackToMenu: () => void;
  onOpenThemeSelect: () => void;
  onSoundToggle: () => void;
}

export const LevelSelect: React.FC<LevelSelectProps> = ({
  saveState,
  currentTheme,
  levels,
  onSelectLevel,
  onBackToMenu,
  onOpenThemeSelect,
  onSoundToggle,
}) => {
  const themeData = saveState.themeProgress[currentTheme] || { unlockedLevel: 1, progress: {} };
  const activeThemeMeta = AVAILABLE_THEMES.find((t) => t.id === currentTheme) || AVAILABLE_THEMES[0];

  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  // Dynamic categories based on current theme's levels
  const rawCategories = Array.from(new Set(levels.map((l) => l.category)));
  const categories = ['Tümü', ...rawCategories];

  const filteredLevels = selectedCategory === 'Tümü'
    ? levels
    : levels.filter((l) => l.category === selectedCategory);

  const totalStars = Object.values(themeData.progress).reduce(
    (acc, p) => acc + (p.completed ? p.stars : 0),
    0
  );
  const completedCount = Object.values(themeData.progress).filter((p) => p.completed).length;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col h-full select-none px-3 py-2 pb-6">
      {/* Top Bar */}
      <header className="flex items-center justify-between py-2 border-b border-slate-200/80 dark:border-slate-800">
        <button
          type="button"
          onClick={onBackToMenu}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Menü</span>
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={onOpenThemeSelect}
            className="flex items-center gap-1 mx-auto px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-slate-800 border border-amber-300 dark:border-slate-700 text-[11px] font-bold text-slate-800 dark:text-slate-200 hover:border-amber-400 active:scale-95 transition-all"
          >
            <Palette className="w-3 h-3 text-amber-500" />
            <span className="truncate max-w-[150px]">{activeThemeMeta.name}</span>
          </button>
          <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-amber-500 mt-0.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{totalStars} / 60 Yıldız</span>
            <span className="text-slate-400 font-normal">·</span>
            <span className="text-slate-500 dark:text-slate-400">{completedCount}/20 Tamamlandı</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onSoundToggle}
          className="p-2 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors active:scale-95"
          title={saveState.soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
        >
          {saveState.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
        </button>
      </header>

      {/* Category Tabs */}
      <nav aria-label="Level categories" className="flex items-center gap-1 py-2.5 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all active:scale-95 ${
                isActive
                  ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/30'
                  : 'bg-slate-200/70 hover:bg-slate-300/70 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      {/* Level Cards Grid */}
      <div className="grid grid-cols-2 gap-3 overflow-y-auto pt-1 pb-4 flex-1">
        {filteredLevels.map((lvl) => {
          const isUnlocked = lvl.id <= themeData.unlockedLevel;
          const prog = themeData.progress[lvl.id];
          const isCompleted = prog?.completed;
          const stars = prog?.stars || 0;
          const numStr = lvl.id < 10 ? `0${lvl.id}` : `${lvl.id}`;
          const pieceCount = lvl.rows * lvl.cols;

          return (
            <button
              key={lvl.id}
              type="button"
              disabled={!isUnlocked}
              onClick={() => isUnlocked && onSelectLevel(lvl)}
              className={`relative rounded-2xl p-3 flex flex-col justify-between text-left transition-all border ${
                isUnlocked
                  ? 'bg-white dark:bg-slate-900 border-amber-300/60 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-amber-400 active:scale-[0.98] cursor-pointer'
                  : 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/60 opacity-60 cursor-not-allowed'
              }`}
            >
              {/* Card Top Row: Number & Stars or Lock */}
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                  BÖLÜM {numStr}
                </span>

                {isUnlocked ? (
                  isCompleted ? (
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= stars
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300 dark:text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[10px] font-bold">
                      OYNA
                    </span>
                  )
                ) : (
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-600 text-xs">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>

              {/* Artwork Thumbnail */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-950 mb-2 border border-slate-200/50 dark:border-slate-800 relative shadow-inner">
                {isUnlocked ? (
                  <svg viewBox="0 0 600 600" className="w-full h-full">
                    {lvl.renderIllustration(600, 600)}
                  </svg>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800/80 text-slate-500 gap-1">
                    <Lock className="w-6 h-6 text-slate-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">KİLİTLİ</span>
                  </div>
                )}
              </div>

              {/* Level Details */}
              <div className="w-full">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                  {lvl.title}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between mt-0.5">
                  <span className="font-bold text-amber-600 dark:text-amber-400">{pieceCount} Parça</span>
                  <span className="text-[10px] font-medium text-slate-400 truncate max-w-[90px]">
                    {lvl.city ? `${lvl.city}` : lvl.category}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
