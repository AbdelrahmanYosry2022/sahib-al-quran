import React from 'react';
import { SURAH_LIST } from '../constants/surah-list';

interface SurahSidebarProps {
  onSelect: (id: number) => void;
  selectedId: number;
}

export const SurahSidebar: React.FC<SurahSidebarProps> = ({ onSelect, selectedId }) => {
  return (
    <div className="flex flex-col h-full bg-slate-50 border-e border-slate-200 w-full">
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <h2 className="text-xl font-bold text-slate-800">قائمة السور</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {SURAH_LIST.map((surah) => (
          <button
            key={surah.id}
            onClick={() => onSelect(surah.id)}
            className={`w-full text-start px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
              selectedId === surah.id
                ? 'bg-emerald-100 text-emerald-900 font-semibold'
                : 'hover:bg-slate-200 text-slate-700'
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="text-xs bg-slate-200 w-6 h-6 rounded-full flex items-center justify-center text-slate-500">
                {surah.id}
              </span>
              {surah.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
