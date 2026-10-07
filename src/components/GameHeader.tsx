import React from 'react';
import { Eye, Pause, Volume2, VolumeX, ArrowLeft, Star } from 'lucide-react';
import { LevelDefinition } from '../types/game';

interface GameHeaderProps {
  level: LevelDefinition;
  starsPotential: number; // 3 or 2
  hasUsedPreview: boolean;
  isPreviewActive: boolean;
  soundEnabled: boolean;
  onPreviewClick: () => void;
  onPauseClick: () => void;
  onSoundToggle: () => void;
  onBackToLevels: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  level,
  starsPotential,
  hasUsedPreview,
  isPreviewActive,
  soundEnabled,
  onPreviewClick,
  onPauseClick,
  onSoundToggle,
  onBackToLevels,
}) => {
  const levelNumberStr = level.id < 10 ? `0${level.id}` : `${level.id}`;

  return (
    <header className="w-full flex flex-col gap-2 select-none pt-1">
      {/* Row 1: Back, Title, Level Number, Sound, Pause */}
      <div className="flex items-center justify-between px-1">
        <button
          type="button"
          onClick={onBackToLevels}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors active:scale-95"
          title="Bölüm seçimine dön"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Bölümler</span>
        </button>

        <div className="text-center">
          <h1 className="text-xs uppercase tracking-widest font-black text-amber-600 dark:text-amber-400">
            DÜNYA MİRASLARI
          </h1>
          <div className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center justify-center gap-1.5">
            <span>BÖLÜM {levelNumberStr}</span>
            <span className="text-slate-400 font-normal">·</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
              {level.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onSoundToggle}
            className="p-2 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors active:scale-95"
            title={soundEnabled ? 'Sesi kapat' : 'Sesi aç'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>
          <button
            type="button"
            onClick={onPauseClick}
            className="p-2 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors active:scale-95"
            title="Oyunu duraklat"
          >
            <Pause className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Row 2: Star Potential & Preview Button */}
      <div className="flex items-center justify-between px-2 py-1 bg-white/70 dark:bg-slate-800/60 rounded-xl border border-slate-200/70 dark:border-slate-700/60 shadow-xs">
        {/* Star Rating Tracker */}
        <div className="flex items-center gap-1" title={hasUsedPreview ? 'Önizleme kullanıldı (-1 yıldız)' : 'Önizleme kullanılmadı (3 yıldız mümkün)'}>
          {[1, 2, 3].map((starIdx) => {
            const isEarnable = starIdx <= starsPotential;
            return (
              <Star
                key={starIdx}
                className={`w-5 h-5 transition-all ${
                  isEarnable
                    ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                    : 'text-slate-300 dark:text-slate-600 fill-transparent'
                }`}
              />
            );
          })}
          {hasUsedPreview && (
            <span className="text-[10px] font-medium text-slate-400 ml-1">
              İpucu kullanıldı
            </span>
          )}
        </div>

        {/* Preview Button */}
        <button
          type="button"
          onClick={onPreviewClick}
          disabled={isPreviewActive}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-sm ${
            isPreviewActive
              ? 'bg-amber-500 text-white shadow-amber-500/25 ring-2 ring-amber-400'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{isPreviewActive ? 'GÖSTERİLİYOR...' : 'RESMİ GÖSTER'}</span>
        </button>
      </div>
    </header>
  );
};
