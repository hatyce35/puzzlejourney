import React from 'react';
import { Play, RotateCcw, Grid, Volume2, VolumeX, X } from 'lucide-react';
import { LevelDefinition } from '../types/game';

interface PauseModalProps {
  level: LevelDefinition;
  soundEnabled: boolean;
  onResume: () => void;
  onRestart: () => void;
  onLevelSelect: () => void;
  onSoundToggle: () => void;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  level,
  soundEnabled,
  onResume,
  onRestart,
  onLevelSelect,
  onSoundToggle,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in select-none">
      <div className="relative w-full max-w-xs rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-center flex flex-col items-center gap-4">
        {/* Close icon top-right */}
        <button
          type="button"
          onClick={onResume}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-xs uppercase tracking-widest font-black text-amber-500">
            DÜNYA MİRASLARI
          </span>
          <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight mt-0.5">
            OYUN DURAKLATILDI
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Bölüm {level.id < 10 ? `0${level.id}` : level.id} · {level.title}
          </p>
        </div>

        <div className="w-full flex flex-col gap-2 mt-2">
          {/* Resume */}
          <button
            type="button"
            onClick={onResume}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-[0.98] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-transform"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>DEVAM ET</span>
          </button>

          {/* Restart */}
          <button
            type="button"
            onClick={onRestart}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>BÖLÜMÜ YENİDEN BAŞLAT</span>
          </button>

          {/* Level Select */}
          <button
            type="button"
            onClick={onLevelSelect}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Grid className="w-4 h-4" />
            <span>BÖLÜM SEÇİMİ</span>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={onSoundToggle}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-500" />
                <span>SES: AÇIK</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span>SES: KAPALI</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
