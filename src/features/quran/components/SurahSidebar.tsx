import React from 'react';
import { SURAH_LIST } from '../constants/surah-list';

interface SurahSidebarProps {
  onSelect: (id: number) => void;
  selectedId: number;
}

export const SurahSidebar: React.FC<SurahSidebarProps> = ({ onSelect, selectedId }) => {
  return (
    <div className="flex flex-col h-full bg-white w-full border-l border-stone-100">
      {/* Sidebar Header */}
      <div className="p-8 pb-4">
        <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
          <div className="w-10 h-10 bg-emerald-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg>
          </div>
          <h2 className="text-xl font-black text-stone-800 font-noto tracking-tight">صاحب القرآن</h2>
        </div>
        
        {/* Navigation Tabs (Surahs/Juz) */}
        <div className="flex bg-stone-100 p-1.5 rounded-2xl mb-4">
          <button className="flex-1 py-2.5 text-sm font-bold bg-white text-emerald-900 rounded-xl shadow-sm transition-all">السور</button>
          <button className="flex-1 py-2.5 text-sm font-bold text-stone-400 hover:text-stone-600 transition-colors">الأجزاء</button>
        </div>
      </div>

      {/* Surah List */}
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-2 no-scrollbar">
        {SURAH_LIST.map((surah) => (
          <button
            key={surah.id}
            onClick={() => onSelect(surah.id)}
            className={`w-full group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
              selectedId === surah.id
                ? 'bg-emerald-900 text-white shadow-xl shadow-emerald-900/20 scale-[1.02]'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-700'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black transition-all ${
                selectedId === surah.id ? 'bg-white/20 text-white' : 'bg-white text-emerald-900 shadow-sm border border-stone-100'
              }`}>
                {surah.id}
              </div>
              <div className="text-right">
                <p className={`font-black text-lg ${selectedId === surah.id ? 'text-white' : 'text-stone-800'} font-amiri`}>
                  {surah.name}
                </p>
                <p className={`text-[10px] font-bold ${selectedId === surah.id ? 'text-emerald-100' : 'text-stone-400'} uppercase tracking-widest`}>
                  آياتها {surah.id === 1 ? 7 : (surah.id === 2 ? 286 : 100)} آية
                </p>
              </div>
            </div>
            
            {/* Indicative Icon */}
            {selectedId === surah.id && (
              <div className="w-1.5 h-6 bg-emerald-400 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
      
      {/* Bottom Profile/Branding */}
      <div className="p-6 border-t border-stone-50 bg-stone-50/50">
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-stone-100 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-xl grayscale">👤</div>
          <div className="text-right flex-1">
            <p className="text-xs font-black text-stone-800">عبدالرحمن يسري</p>
            <p className="text-[10px] text-stone-400">Senior Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
