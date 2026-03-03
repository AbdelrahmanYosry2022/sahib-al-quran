import React from 'react';
import { SurahDetail } from '../types';

interface SurahTabsProps {
  surah: Partial<SurahDetail>;
}

const sections = [
  { id: 'details', label: 'تفاصيل السورة' },
  { id: 'asbab', label: 'أسباب النزول' },
  { id: 'aqadiyya', label: 'المواضيع العقدية' },
  { id: 'fiqhiyya', label: 'الأحكام الفقهية' },
  { id: 'names', label: 'أسماء السورة' },
  { id: 'virtues', label: 'فضل السورة' },
  { id: 'reflections', label: 'وقفات تربوية' },
  { id: 'supplications', label: 'أدعية السورة' },
];

export const SurahTabs: React.FC<SurahTabsProps> = ({ surah }) => {
  const [activeTab, setActiveTab] = React.useState('details');

  return (
    <div className="flex flex-col h-full bg-white text-slate-900 rounded-xl shadow-sm border overflow-hidden">
      {/* Scrollable Tabs on top */}
      <div className="flex overflow-x-auto whitespace-nowrap border-b bg-slate-50/50 p-2 scrollbar-hide">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activeTab === section.id
                ? 'bg-emerald-600 text-white shadow-md transform scale-105'
                : 'text-slate-600 hover:bg-slate-200'
            } mx-1`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-white min-h-[400px]">
        {activeTab === 'details' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h3 className="text-2xl font-bold border-b pb-2 text-emerald-800">{surah.name}</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-3 rounded-lg border">
                <p className="text-slate-500">النوع</p>
                <p className="font-semibold text-lg">{surah.revelationType === 'MAKKI' ? 'مكية' : 'مدنية'}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border">
                <p className="text-slate-500">عدد الآيات</p>
                <p className="font-semibold text-lg">{surah.versesCount}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border">
                <p className="text-slate-500">ترتيب النزول</p>
                <p className="font-semibold text-lg">{surah.revelationOrder}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'asbab' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h3 className="text-xl font-bold border-b pb-2">أسباب النزول</h3>
            <p className="leading-relaxed text-slate-700">{surah.asbabAlNuzul || 'لا تتوفر بيانات حالياً.'}</p>
          </div>
        )}

        {/* More tabs can be implemented similarly... */}
        {['aqadiyya', 'fiqhiyya', 'names', 'virtues', 'reflections', 'supplications'].includes(activeTab) && (
           <div className="flex flex-col items-center justify-center h-full text-slate-400">
             <p className="text-lg italic">هذا القسم قيد التجهيز لبيانات {surah.name}</p>
           </div>
        )}
      </div>
    </div>
  );
};
