import React from 'react';
import { SurahDetail } from '../types';

interface SurahTabsProps {
  surah: Partial<SurahDetail>;
}

const sections = [
  { id: 'details', label: 'عن السورة', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg> },
  { id: 'asbab', label: 'أسباب النزول', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg> },
  { id: 'aqadiyya', label: 'مواضيع عقدية', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m12 8-4 4 4 4 4-4-4-4z"></path></svg> },
  { id: 'fiqhiyya', label: 'أحكام فقهية', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg> },
  { id: 'names', label: 'الأسماء والمعاني', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> },
  { id: 'virtues', label: 'فضائل السورة', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
  { id: 'reflections', label: 'وقفات إيمانية', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg> },
  { id: 'supplications', label: 'أدعية مأثورة', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path></svg> },
];

export const SurahTabs: React.FC<SurahTabsProps> = ({ surah }) => {
  const [activeTab, setActiveTab] = React.useState('details');

  return (
    <div className="flex flex-col h-full text-stone-900 font-noto">
      
      {/* Scrollable pill tabs with sleek border/active state */}
      <div className="flex overflow-x-auto whitespace-nowrap px-4 py-2 gap-4 no-scrollbar mb-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`group relative flex items-center gap-3 px-8 py-4 text-sm font-black rounded-[24px] transition-all duration-500 border-2 ${
              activeTab === section.id
                ? 'bg-emerald-900 text-white border-emerald-900 shadow-2xl shadow-emerald-900/20 translate-y-[-4px]'
                : 'bg-white text-stone-400 border-stone-100 hover:border-stone-200 hover:text-stone-600'
            }`}
          >
            <span className={`${activeTab === section.id ? 'text-emerald-300' : 'text-stone-300 group-hover:text-stone-500'} transition-colors`}>
              {section.icon}
            </span>
            {section.label}
          </button>
        ))}
      </div>

      {/* Premium Content Card */}
      <div className="px-2 lg:px-4">
        <div className="bg-white rounded-[48px] p-8 lg:p-14 shadow-2xl shadow-stone-200/50 border border-white/50 relative overflow-hidden group">
          
          {/* Section Decorative Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-emerald-50 rounded-[28px] flex items-center justify-center text-emerald-900 shadow-inner border border-emerald-100/50">
                  {sections.find(s => s.id === activeTab)?.icon}
              </div>
              <h3 className="text-3xl font-black text-stone-800 tracking-tight font-amiri">
                  {sections.find(s => s.id === activeTab)?.label}
              </h3>
            </div>
            <div className="h-px flex-1 bg-stone-50 hidden lg:block mx-8" />
            <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-100" />
                <span className="w-3 h-3 rounded-full bg-emerald-200" />
                <span className="w-3 h-3 rounded-full bg-emerald-300" />
            </div>
          </div>

          <div className="min-h-[400px]">
            {activeTab === 'details' && (
              <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-stone-50/50 p-8 rounded-[36px] border border-stone-100/50 group hover:bg-emerald-900 hover:border-emerald-900 transition-all duration-500">
                    <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-3 group-hover:text-emerald-300">مكان النزول</p>
                    <p className="font-black text-stone-800 text-2xl group-hover:text-white font-amiri">{surah.revelationType === 'MAKKI' ? 'مكية' : 'مدنية'}</p>
                  </div>
                  <div className="bg-stone-50/50 p-8 rounded-[36px] border border-stone-100/50 group hover:bg-emerald-900 hover:border-emerald-900 transition-all duration-500">
                    <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-3 group-hover:text-emerald-300">عدد الآيات</p>
                    <p className="font-black text-stone-800 text-2xl group-hover:text-white font-amiri">{surah.versesCount} آية</p>
                  </div>
                  <div className="bg-stone-50/50 p-8 rounded-[36px] border border-stone-100/50 group hover:bg-emerald-900 hover:border-emerald-900 transition-all duration-500">
                    <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-3 group-hover:text-emerald-300">ترتيب المصحف</p>
                    <p className="font-black text-stone-800 text-2xl group-hover:text-white font-amiri">{surah.id}</p>
                  </div>
                </div>
                
                <div className="bg-[#FFFDFB] p-10 lg:p-14 rounded-[40px] border border-stone-100 shadow-sm relative">
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-emerald-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-emerald-900/20">نبذة تعريفية</div>
                  <p className="leading-[2.5] text-stone-800 text-2xl lg:text-3xl font-amiri text-center lg:text-right">
                      تعتبر سورة {surah.name} من أعظم سور القرآن الكريم، حيث أنها السورة التي لا تصح الصلاة إلا بها، وتشتمل على مجمل معاني القرآن من توحيد وعبادة ووعد ووعيد.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'asbab' && (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-500">
                <div className="bg-stone-50/30 p-10 lg:p-16 rounded-[48px] border-2 border-dashed border-stone-100 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-emerald-900 border border-stone-50">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
                   </div>
                   <p className="leading-[2.8] text-stone-800 text-2xl lg:text-3xl font-amiri text-center italic">
                      {surah.asbabAlNuzul || 'هذا المحتوى يتم تحضيره وتوثيقه حالياً من أمهات كتب التفسير والحديث، لضمان دقة المعلومات الواردة في تطبيق صاحب القرآن لسورة ' + surah.name}
                   </p>
                </div>
              </div>
            )}

            {/* General Styled Placeholder for other tabs */}
            {['aqadiyya', 'fiqhiyya', 'names', 'virtues', 'reflections', 'supplications'].includes(activeTab) && (
               <div className="flex flex-col items-center justify-center py-24 text-center animate-in zoom-in-90 duration-500">
                 <div className="w-24 h-24 bg-stone-50 rounded-[32px] flex items-center justify-center text-4xl mb-10 border border-stone-100/50 shadow-inner">
                   <span className="grayscale opacity-30">{sections.find(s => s.id === activeTab)?.icon}</span>
                 </div>
                 <h4 className="text-stone-800 font-black text-2xl mb-4 font-amiri">المحتوى قيد التوثيق</h4>
                 <p className="text-stone-400 font-bold text-lg max-w-md mx-auto leading-relaxed">
                   نحن نحرص في "صاحب القرآن" على تقديم مادة علمية موثقة وشيقة، جاري العمل على إكمال قسم <span className="text-emerald-700">{sections.find(s => s.id === activeTab)?.label}</span>.
                 </p>
                 <div className="mt-12 flex justify-center gap-3">
                   {[1,2,3,4].map(i => <div key={i} className="w-3 h-3 bg-emerald-900/10 rounded-full animate-pulse" style={{animationDelay: `${i*200}ms`}} />)}
                 </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
