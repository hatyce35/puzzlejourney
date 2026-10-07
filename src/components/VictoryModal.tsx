import React from 'react';
import { Star, RotateCcw, ArrowRight, Grid } from 'lucide-react';
import { LevelDefinition } from '../types/game';

interface VictoryModalProps {
  level: LevelDefinition;
  starsEarned: number; // 2 or 3
  hasNextLevel: boolean;
  onNextLevel: () => void;
  onReplay: () => void;
  onLevelSelect: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  level,
  starsEarned,
  hasNextLevel,
  onNextLevel,
  onReplay,
  onLevelSelect,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-300 select-none">
      <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-400/50 shadow-2xl p-6 text-center flex flex-col items-center gap-4 overflow-hidden">
        {/* Decorative background sunburst */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Celebration Title */}
        <div>
          <span className="text-xs uppercase tracking-widest font-black text-amber-500">
            BÖLÜM {level.id < 10 ? `0${level.id}` : level.id} TAMAMLANDI
          </span>
          <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight mt-0.5">
            TABLO TAMAMLANDI!
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {level.title} {level.city ? `· ${level.city}, ${level.country}` : ''}
          </p>
        </div>

        {/* Finished Illustration Frame */}
        <div className="relative w-44 h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300 dark:border-amber-600/40 bg-slate-950 transition-transform duration-700 animate-bounce-subtle">
          <svg viewBox="0 0 600 600" className="w-full h-full">
            {level.renderIllustration(600, 600)}
          </svg>
        </div>

        {/* Star Rating Reveal */}
        <div className="flex items-center justify-center gap-2 py-1">
          {[1, 2, 3].map((starIdx) => {
            const isEarned = starIdx <= starsEarned;
            return (
              <div
                key={starIdx}
                className="transform transition-transform duration-300 hover:scale-110"
                style={{
                  animationDelay: `${starIdx * 150}ms`,
                }}
              >
                <Star
                  className={`w-9 h-9 transition-colors ${
                    isEarned
                      ? 'text-amber-400 fill-amber-400 drop-shadow-[0_4px_8px_rgba(251,191,36,0.5)]'
                      : 'text-slate-300 dark:text-slate-700 fill-slate-200 dark:fill-slate-800'
                  }`}
                />
              </div>
            );
          })}
        </div>

        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          {starsEarned === 3 ? 'Kusursuz! İpucu kullanmadan tamamladınız ⭐⭐⭐' : 'Tebrikler! Başarıyla tamamladınız ⭐⭐'}
        </p>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-2.5 mt-2">
          {hasNextLevel ? (
            <button
              type="button"
              onClick={onNextLevel}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-[0.98] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-transform"
            >
              <span>SONRAKİ BÖLÜM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="py-2 text-xs font-bold text-amber-500">
              🏆 Tüm 20 Tarihi Şehir Tamamlandı! Tebrikler!
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={onReplay}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>TEKRAR OYNA</span>
            </button>

            <button
              type="button"
              onClick={onLevelSelect}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>BÖLÜMLER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
