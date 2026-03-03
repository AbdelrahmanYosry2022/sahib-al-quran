import React from 'react';
import { SURAH_LIST } from '../constants/surah-list';

interface SurahSidebarProps {
  onSelect: (id: number) => void;
  selectedId: number;
}

export const SurahSidebar: React.FC<SurahSidebarProps> = ({ onSelect, selectedId }) => {
  return (
    <div className="flex flex-col h-full bg-[#FDFCF9] w-full">
      <div className="p-6 border-b border-stone-100">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold">ص</div>
          <h2 className="text-xl font-bold text-stone-800 font-noto">صاحب القرآن</h2>
        </div>
        
        <div className="flex bg-stone-100 p-1 rounded-xl">
          <button className="flex-1 py-2 text-sm font-bold bg-white text-emerald-800 rounded-lg shadow-sm">السور</button>
          <button className="flex-1 py-2 text-sm font-medium text-stone-500">الأجزاء</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1 scrollbar-hide">
        {SURAH_LIST.map((surah) => (
          <button
            key={surah.id}
            onClick={() => onSelect(surah.id)}
            className={`w-full group flex items-center justify-between p-4 rounded-2xl transition-all ${
              selectedId === surah.id
                ? 'bg-emerald-50 border border-emerald-100'
                : 'hover:bg-stone-50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                selectedId === surah.id ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-500'
              }`}>
                {surah.id}
              </div>
              <div className="text-right">
                <p className={`font-bold text-lg ${selectedId === surah.id ? 'text-emerald-900' : 'text-stone-800'}`}>
                  {surah.name}
                </p>
                <p className="text-xs text-stone-400">آياتها {surah.id === 1 ? 7 : 100} - مكية</p>
              </div>
            </div>
            <div className={`w-2 h-2 rounded-full ${selectedId === surah.id ? 'bg-emerald-500' : 'bg-transparent'}`} />
          </button>
        ))}
      </div>
      
      {/* Bottom Nav Mock for Sidebar */}
      <div className="p-4 border-t border-stone-100 grid grid-cols-4 gap-1 text-[10px] text-stone-400 text-center">
        <div><div className="h-5 w-5 mx-auto mb-1 opacity-50">🏠</div>الرئيسية</div>
        <div><div className="h-5 w-5 mx-auto mb-1 opacity-50">📖</div>المصحف</div>
        <div><div className="h-5 w-5 mx-auto mb-1 opacity-50">⭐</div>المفضلة</div>
        <div><div className="h-5 w-5 mx-auto mb-1 opacity-50">⚙️</div>الإعدادات</div>
      </div>
    </div>
  );
};
