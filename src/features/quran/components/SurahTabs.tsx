import React, { useState } from 'react';
import { SurahDetail } from '../types';

interface SurahTabsProps {
  surah: Partial<SurahDetail>;
}

const sections = [
  { id: 'details', label: 'تفاصيل السورة', icon: '📖' },
  { id: 'asbab', label: 'أسباب النزول', icon: '🕊️' },
  { id: 'aqadiyya', label: 'المواضيع العقدية', icon: '⚖️' },
  { id: 'fiqhiyya', label: 'الأحكام الفقهية', icon: '📜' },
  { id: 'qisasiyya', label: 'القصص القرآنية', icon: '⌛' },
  { id: 'dua', label: 'الأدعية القرآنية', icon: '🤲' },
  { id: 'akhlaqiyya', label: 'الأخلاق والسلوك', icon: '✨' },
];

export const SurahTabs: React.FC<SurahTabsProps> = ({ surah }) => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-700">
      {/* Original Tabs Style - Restoration with Consistent Icons & Layout */}
      <div className="flex items-center gap-1 overflow-x-auto pb-4 scrollbar-hide no-scrollbar rtl:flex-row-reverse border-b border-[#1D1B4B]/10">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`flex items-center gap-2.5 px-5 py-3 whitespace-nowrap text-[13px] font-black transition-all duration-300 relative ${activeTab === section.id
              ? 'text-[#1D1B4B]'
              : 'text-[#1D1B4B]/30 hover:text-[#1D1B4B]/60'
              }`}
          >
            <span className="text-lg leading-none">{section.icon}</span>
            <span className="leading-none">{section.label}</span>
            {activeTab === section.id && (
              <div className="absolute bottom-[-1px] left-0 right-0 h-[4px] bg-[#1D1B4B] rounded-full animate-in slide-in-from-bottom-2 duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[450px]">
        <div className="relative">
          {activeTab === 'details' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="grid grid-cols-2 gap-4">
                {/* Restoration of "Old Badges" style - 20px rounding, original colors */}
                <div className="bg-[#FFF8F4] p-6 rounded-[20px] border border-orange-100/50">
                  <p className="text-orange-900/40 text-[9px] font-black uppercase tracking-widest mb-2">مكان النزول</p>
                  <p className="font-black text-gray-800 text-2xl">{surah.revelationType === 'MAKKI' ? 'مكية' : 'مدنية'}</p>
                </div>
                <div className="bg-[#F4F8FF] p-6 rounded-[20px] border border-blue-100/50">
                  <p className="text-blue-900/40 text-[9px] font-black uppercase tracking-widest mb-2">عدد الآيات</p>
                  <p className="font-black text-gray-800 text-2xl">{surah.versesCount} آية</p>
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-10 lg:p-14 rounded-[40px]">
                <p className="leading-[2] text-[#1D1B4B] text-xl lg:text-2xl font-medium text-center lg:text-right">
                  تعتبر سورة {surah.name} من أعظم سور القرآن الكريم، حيث أنها السورة التي لا تصح الصلاة إلا بها، وتشتمل على مجمل معاني القرآن من توحيد وعبادة ووعد ووعيد.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'asbab' && (
            <div className="animate-in fade-in duration-500">
              <div className="bg-white/40 border border-white/60 p-10 lg:p-14 rounded-[40px]">
                <p className="leading-[2.4] text-[#1D1B4B] text-xl text-right italic font-medium">
                  {surah.asbabAlNuzul || 'هذا المحتوى يتم تحضيره وتوثيقه حالياً من أمهات كتب التفسير والحديث، لضمان دقة المعلومات الواردة في تطبيق صاحب القرآن لسورة ' + surah.name}
                </p>
              </div>
            </div>
          )}

          {!['details', 'asbab'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center py-32 text-center animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-white/40 border border-white/60 rounded-[32px] flex items-center justify-center text-[#1D1B4B]/10 mb-8">
                <span className="text-5xl">{sections.find(s => s.id === activeTab)?.icon}</span>
              </div>
              <h4 className="text-[#1D1B4B] font-black text-2xl mb-4">المحتوى قيد التوثيق</h4>
              <p className="text-[#1D1B4B]/40 text-[10px] max-w-xs mx-auto leading-relaxed uppercase tracking-[0.2em] font-black">
                نحن نحرص على تقديم مادة علمية موثقة ومعتمدة تليق بكتاب الله
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
