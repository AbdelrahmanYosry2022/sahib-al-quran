import React from 'react';
import { SurahDetail } from '../types';

interface SurahTabsProps {
  surah: Partial<SurahDetail>;
}

const sections = [
  { id: 'details', label: 'تفاصيل السورة', icon: '📖' },
  { id: 'asbab', label: 'أسباب النزول', icon: '🕊️' },
  { id: 'aqadiyya', label: 'المواضيع العقدية', icon: '⚖️' },
  { id: 'fiqhiyya', label: 'الأحكام الفقهية', icon: '📜' },
  { id: 'names', label: 'أسماء السورة', icon: '🏷️' },
  { id: 'virtues', label: 'فضل السورة', icon: '✨' },
  { id: 'reflections', label: 'وقفات تربوية', icon: '💡' },
  { id: 'supplications', label: 'أدعية السورة', icon: '🤲' },
];

export const SurahTabs: React.FC<SurahTabsProps> = ({ surah }) => {
  const [activeTab, setActiveTab] = React.useState('details');

  return (
    <div className="flex flex-col h-full text-stone-900 overflow-hidden font-noto">
      {/* Scrollable Horizontal Tabs with Pill Design */}
      <div className="flex overflow-x-auto whitespace-nowrap p-4 gap-3 no-scrollbar">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 border ${
              activeTab === section.id
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-lg shadow-emerald-200 -translate-y-0.5'
                : 'bg-white text-stone-500 border-stone-200 hover:border-stone-400'
            }`}
          >
            <span className="flex items-center gap-2">
               <span className="text-xs">{section.icon}</span>
               {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Modern Card Content Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <div className="bg-[#FAF8F5] rounded-[32px] p-8 shadow-sm border border-[#EBE6DD] min-h-[500px] animate-in slide-in-from-bottom-4 duration-500">
          
          {/* Section Heading with Icon */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                {sections.find(s => s.id === activeTab)?.icon}
            </div>
            <h3 className="text-xl font-black text-stone-800 tracking-tight">
                {sections.find(s => s.id === activeTab)?.label}
            </h3>
          </div>

          {activeTab === 'details' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/80 p-5 rounded-3xl border border-stone-100/50 flex items-center justify-between">
                  <span className="text-stone-400 font-medium">النوع</span>
                  <span className="font-bold text-emerald-800 text-lg">{surah.revelationType === 'MAKKI' ? 'مكية' : 'مدنية'}</span>
                </div>
                <div className="bg-white/80 p-5 rounded-3xl border border-stone-100/50 flex items-center justify-between">
                  <span className="text-stone-400 font-medium">عدد الآيات</span>
                  <span className="font-bold text-stone-800 text-lg">{surah.versesCount} آيات</span>
                </div>
                <div className="bg-white/80 p-5 rounded-3xl border border-stone-100/50 flex items-center justify-between">
                  <span className="text-stone-400 font-medium">ترتيب النزول</span>
                  <span className="font-bold text-stone-800 text-lg">{surah.revelationOrder}</span>
                </div>
              </div>
              
              <div className="bg-white/80 p-6 rounded-3xl border border-stone-100/50">
                <h4 className="text-sm font-bold text-stone-400 mb-3 uppercase tracking-widest">نبذة عن السورة</h4>
                <p className="leading-loose text-stone-800 text-lg font-amiri">
                    سورة {surah.name} هي السورة الأولى في ترتيب المصحف الشريف، وتسمى أم الكتاب وأم القرآن والسبع المثاني، وقد أوجب الله قراءتها في كل ركعة من ركعات الصلاة.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'asbab' && (
            <div className="space-y-6">
              <div className="bg-emerald-50/30 p-8 rounded-3xl border border-emerald-100/50 relative overflow-hidden group">
                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl transition-transform group-hover:scale-150 duration-700" />
                 <p className="leading-[2.2] text-stone-800 text-xl font-amiri text-center lg:text-right">
                    {surah.asbabAlNuzul || 'هذا القسم قيد التجهيز ببيانات موثقة من كتب التفسير والسيرة النبوية لسورة ' + surah.name}
                 </p>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs with consistent design */}
          {['aqadiyya', 'fiqhiyya', 'names', 'virtues', 'reflections', 'supplications'].includes(activeTab) && (
             <div className="flex flex-col items-center justify-center py-20 text-center">
               <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-4xl mb-6 grayscale opacity-50">
                 {sections.find(s => s.id === activeTab)?.icon}
               </div>
               <p className="text-stone-400 font-bold text-xl italic max-w-xs">
                 جاري العمل على توثيق محتوى قسم {sections.find(s => s.id === activeTab)?.label}
               </p>
               <div className="mt-8 flex gap-2">
                 {[1,2,3].map(i => <div key={i} className="w-2 h-2 bg-stone-200 rounded-full animate-bounce" style={{animationDelay: `${i*150}ms`}} />)}
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
