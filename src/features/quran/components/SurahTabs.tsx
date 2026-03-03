import React from 'react';
import { SurahDetail } from '../types';
import {
  Info,
  MessageSquare,
  ShieldCheck,
  Gavel,
  Tag,
  Star,
  Heart,
  Hand
} from 'lucide-react';

interface SurahTabsProps {
  surah: Partial<SurahDetail>;
}

const sections = [
  { id: 'details', label: 'عن السورة', icon: <Info size={18} /> },
  { id: 'asbab', label: 'أسباب النزول', icon: <MessageSquare size={18} /> },
  { id: 'aqadiyya', label: 'مواضيع عقدية', icon: <ShieldCheck size={18} /> },
  { id: 'fiqhiyya', label: 'أحكام فقهية', icon: <Gavel size={18} /> },
  { id: 'names', label: 'الأسماء والمعاني', icon: <Tag size={18} /> },
  { id: 'virtues', label: 'فضائل السورة', icon: <Star size={18} /> },
  { id: 'reflections', label: 'وقفات إيمانية', icon: <Heart size={18} /> },
  { id: 'supplications', label: 'أدعية مأثورة', icon: <Hand size={18} /> },
];

export const SurahTabs: React.FC<SurahTabsProps> = ({ surah }) => {
  const [activeTab, setActiveTab] = React.useState('details');

  return (
    <div className="flex flex-col h-full text-black font-graphik">

      {/* Pill Tabs - Flatter and cleaner */}
      <div className="flex overflow-x-auto whitespace-nowrap px-1 py-4 gap-3 scrollbar-hide no-scrollbar mb-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeTab === section.id
              ? 'bg-black text-white'
              : 'bg-[#F5F5F7] text-gray-500 hover:bg-gray-200'
              }`}
          >
            {section.icon}
            <span className="text-xs font-bold tracking-tight">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content Area - Minimal Flat Card */}
      <div className="p-1 min-h-[300px]">
        <div className="relative">
          {activeTab === 'details' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#FFF8F4] p-5 rounded-[16px]">
                  <p className="text-orange-900/40 text-[9px] font-bold uppercase tracking-widest mb-1">مكان النزول</p>
                  <p className="font-bold text-gray-800 text-base">{surah.revelationType === 'MAKKI' ? 'مكية' : 'مدنية'}</p>
                </div>
                <div className="bg-[#F4F8FF] p-5 rounded-[16px]">
                  <p className="text-blue-900/40 text-[9px] font-bold uppercase tracking-widest mb-1">عدد الآيات</p>
                  <p className="font-bold text-gray-800 text-base">{surah.versesCount} آية</p>
                </div>
              </div>

              <div className="bg-[#FBFBFA] p-8 rounded-[20px] border border-gray-100/50">
                <p className="leading-[2] text-gray-700 text-lg lg:text-xl text-center lg:text-right">
                  تعتبر سورة {surah.name} من أعظم سور القرآن الكريم، حيث أنها السورة التي لا تصح الصلاة إلا بها، وتشتمل على مجمل معاني القرآن من توحيد وعبادة ووعد ووعيد.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'asbab' && (
            <div className="animate-in fade-in duration-300">
              <div className="bg-[#F5F5F7] p-8 lg:p-12 rounded-[20px]">
                <p className="leading-[2.2] text-gray-700 text-lg text-right italic">
                  {surah.asbabAlNuzul || 'هذا المحتوى يتم تحضيره وتوثيقه حالياً من أمهات كتب التفسير والحديث، لضمان دقة المعلومات الواردة في تطبيق صاحب القرآن لسورة ' + surah.name}
                </p>
              </div>
            </div>
          )}

          {!['details', 'asbab'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in-95">
              <div className="w-16 h-16 bg-[#F5F5F7] rounded-2xl flex items-center justify-center text-gray-300 mb-4">
                {sections.find(s => s.id === activeTab)?.icon}
              </div>
              <h4 className="text-gray-800 font-bold text-lg mb-2">المحتوى قيد التوثيق</h4>
              <p className="text-gray-400 text-[10px] max-w-xs mx-auto leading-relaxed uppercase tracking-wider font-bold">
                نحن نحرص على تقديم مادة علمية موثقة
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
