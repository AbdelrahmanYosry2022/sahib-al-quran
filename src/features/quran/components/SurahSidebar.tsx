import React from 'react';
import { SURAH_LIST } from '../constants/surah-list';

interface SurahSidebarProps {
  onSelect: (id: number) => void;
  selectedId: number;
}

export const SurahSidebar: React.FC<SurahSidebarProps> = ({ onSelect, selectedId }) => {
  return (
    <div className="flex flex-col h-full bg-[#FBFBFA] w-full font-graphik text-black">
      {/* Surah List Only - Direct and Minimal */}
      <div className="flex-1 overflow-y-auto px-4 py-6 pb-20 space-y-1 scrollbar-hide no-scrollbar">
        {SURAH_LIST.map((surah) => (
          <button
            key={surah.id}
            onClick={() => onSelect(surah.id)}
            className={`w-full group flex items-center justify-between p-2.5 rounded-xl transition-all ${selectedId === surah.id
              ? 'bg-black text-white'
              : 'bg-transparent hover:bg-gray-100 text-gray-700'
              }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all ${selectedId === surah.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                {surah.id}
              </div>
              <div className="text-right">
                <p className={`font-bold text-base ${selectedId === surah.id ? 'text-white' : 'text-gray-800'} leading-none mb-1`}>
                  {surah.name}
                </p>
                <p className={`text-[8px] font-bold ${selectedId === surah.id ? 'text-gray-400' : 'text-gray-400'} uppercase tracking-tight`}>
                  سورة رقم {surah.id}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
