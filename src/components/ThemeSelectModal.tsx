import React from 'react';
import { X, Check, Landmark, Mountain, Palette, Moon, Star, Sparkles } from 'lucide-react';
import { AVAILABLE_THEMES } from '../data/themes';
import { GameSaveState, ThemeId } from '../types/game';

interface ThemeSelectModalProps {
  currentTheme: ThemeId;
  saveState: GameSaveState;
  onSelectTheme: (themeId: ThemeId) => void;
  onClose: () => void;
}

export const ThemeSelectModal: React.FC<ThemeSelectModalProps> = ({
  currentTheme,
  saveState,
  onSelectTheme,
  onClose,
}) => {
  const getThemeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-amber-500" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-emerald-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-purple-500" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
              GÖRSEL TEMA SEÇİMİ
            </span>
            <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              Yapboz Dünyanızı Seçin
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors active:scale-95"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme List */}
        <div className="flex flex-col gap-3 py-4 overflow-y-auto pr-1">
          {AVAILABLE_THEMES.map((theme) => {
            const isSelected = currentTheme === theme.id;
            const progress = saveState.themeProgress[theme.id];
            const totalStars = Object.values(progress?.progress || {}).reduce(
              (acc, p) => acc + (p.completed ? p.stars : 0),
              0
            );
            const completedCount = Object.values(progress?.progress || {}).filter(
              (p) => p.completed
            ).length;

            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => {
                  onSelectTheme(theme.id);
                  onClose();
                }}
                className={`relative w-full rounded-2xl overflow-hidden text-left p-3.5 flex items-center gap-3.5 transition-all border-2 ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/20 shadow-md ring-2 ring-amber-400/30'
                    : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                } active:scale-[0.99]`}
              >
                {/* Theme Cover Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 shadow-sm border border-black/10">
                  <img
                    src={theme.coverImage}
                    alt={theme.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-1.5 p-1 rounded-lg bg-black/50 backdrop-blur-xs text-white">
                    {getThemeIcon(theme.icon)}
                  </div>
                </div>

                {/* Theme Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                      {theme.name}
                    </h3>
                    {isSelected && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>AKTİF</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 truncate">
                    {theme.tagline}
                  </p>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {theme.description}
                  </p>

                  {/* Progress Stats */}
                  <div className="flex items-center gap-3 mt-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{totalStars} / 60</span>
                    </div>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span>{completedCount}/20 Seviye</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-2 text-center text-xs text-slate-400 dark:text-slate-500">
          İstediğiniz zaman menüden veya bölüm ekranından temayı değiştirebilirsiniz.
        </div>
      </div>
    </div>
  );
};
