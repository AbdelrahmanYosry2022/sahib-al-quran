import React, { useState } from 'react';
import { useSurahDetails } from '../hooks/useSurahDetails';
import { useNavigation } from '../hooks/useNavigation';
import { SurahSidebar } from './SurahSidebar';
import { SurahTabs } from './SurahTabs';
import { MobileDrawer } from './MobileDrawer';
import {
  Menu,
  BookOpen,
  Home,
  Compass,
  MapPin,
  MessageCircle,
  PenTool,
  Bookmark,
  Layout,
  Book,
  Star,
  Flame,
  Search,
  Sparkles
} from 'lucide-react';

type DashboardView = 'home' | 'tadabbur' | 'mushaf' | 'profile';

// Helper component for the icon greed bubbles
const IconBubble: React.FC<{ icon: React.ReactNode, bgColor: string, iconColor: string, label: string }> = ({ icon, bgColor, iconColor, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-14 h-14 rounded-[22px] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer`} style={{ backgroundColor: bgColor, color: iconColor }}>
      {icon}
    </div>
    <span className="text-[10px] font-bold text-[#1D1B4B]/40">{label}</span>
  </div>
);

// Progress Circle for the list items
const CircularProgress: React.FC<{ percentage: number, color: string }> = ({ percentage, color }) => {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="16" cy="16" r={radius} fill="transparent" stroke="#F1F1F1" strokeWidth="3" />
        <circle
          cx="16" cy="16" r={radius} fill="transparent" stroke={color} strokeWidth="3"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const MainDashboard: React.FC = () => {
  const { selectedSurah, selectedSurahId, selectSurah } = useSurahDetails(1);
  const { isDrawerOpen, toggleDrawer, closeDrawer } = useNavigation();
  const [currentView, setCurrentView] = useState<DashboardView>('home');
  const [activeTab, setActiveTab] = useState<'popular' | 'rising'>('popular');

  const handleSelectSurah = (id: number) => {
    selectSurah(id);
    setCurrentView('tadabbur');
    closeDrawer();
  };

  const surahs = [
    { id: 2, name: 'البقرة', sub: 'سورة مدنية - الآية ١٥', progress: 45, color: '#FFD166' },
    { id: 3, name: 'آل عمران', sub: 'سورة مدنية - الآية ٢٢', progress: 12, color: '#FFD166' },
    { id: 4, name: 'النساء', sub: 'سورة مدنية - لم تبدأ بعد', progress: 0, color: '#FFD166' },
    { id: 1, name: 'الفاتحة', sub: 'سورة مكية - فاتحة الكتاب', progress: 100, color: '#EF476F' },
  ];

  return (
    <div className="flex h-screen w-full bg-[#F5F7FB] font-graphik antialiased text-[#1D1B4B]" dir="rtl">
      {/* Sidebar - Remains for Desktop */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} onSelect={handleSelectSurah} selectedId={selectedSurahId} />
      <aside className="hidden lg:flex w-[320px] h-full flex-col bg-white border-l border-gray-100">
        <SurahSidebar onSelect={handleSelectSurah} selectedId={selectedSurahId} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">

        {/* Transparent Minimal Header */}
        <header className="h-[70px] flex items-center justify-between px-6 lg:px-10 shrink-0 z-30">
          <button className="w-10 h-10 flex items-center justify-center lg:hidden" onClick={toggleDrawer}>
            <Menu size={20} />
          </button>
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
            <img src="/images/Sahib Al Quran.png" alt="صاحب القرآن" className="h-7 object-contain" />
          </div>
          <button className="w-10 h-10 flex items-center justify-center">
            <Search size={20} className="text-gray-400" />
          </button>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="max-w-[500px] mx-auto px-6 py-4 space-y-8 pb-32">

            {currentView === 'home' && (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">

                {/* 1. Hero Card - THEME REPLICATION */}
                <div className="relative mb-8 pt-10">
                  {/* Background Decorative Element */}
                  <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#e2e8ff] to-transparent rounded-t-[40px] -z-10 opacity-60 overflow-hidden">
                    <div className="absolute top-4 right-8 flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/40 backdrop-blur-sm transform rotate-12"></div>
                      <div className="w-10 h-10 rounded-full bg-pink-100/40 backdrop-blur-sm -mt-2"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-[32px] p-8 shadow-sm border border-white relative">
                    {/* Floating Sticker Icon */}
                    <div className="absolute -top-6 -left-2 flex gap-1">
                      <div className="p-2 bg-white rounded-xl shadow-md rotate-[-15deg] border border-gray-50">
                        <Star size={18} className="text-pink-400 fill-pink-400" />
                      </div>
                      <div className="p-2 bg-white rounded-xl shadow-md rotate-[10deg] border border-gray-50 scale-110">
                        <Sparkles size={18} className="text-green-400 fill-green-400" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-100 p-1">
                        <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                          <img src="/images/Sahib Al Quran.png" className="w-full h-full object-cover scale-150" alt="Avatar" />
                        </div>
                      </div>
                      <div className="flex-1">
                        {/* Horizontal Progress Bar */}
                        <div className="h-6 w-full bg-[#FFF8E7] rounded-full relative overflow-hidden p-1">
                          <div className="h-full bg-gradient-to-r from-[#FFB84C] to-[#FFD89C] rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        </div>
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">المستوى الأول</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-[#1D1B4B]">مرحباً، {selectedSurah.name}</h2>
                        <div className="p-2.5 bg-[#E8F1FF] rounded-xl text-[#4C8DFF]">
                          <PenTool size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Icon Grid Bubble Styling */}
                <div className="grid grid-cols-4 gap-y-6 mb-10">
                  <IconBubble label="التدبر" icon={<Bookmark size={22} />} bgColor="#F0E6FF" iconColor="#9B66FF" />
                  <IconBubble label="الموقع" icon={<MapPin size={22} />} bgColor="#E3F9EC" iconColor="#49C18B" />
                  <IconBubble label="المجتمع" icon={<MessageCircle size={22} />} bgColor="#FEF7E1" iconColor="#F1C40F" />
                  <IconBubble label="تحدي" icon={<Layout size={22} />} bgColor="#FFF1F1" iconColor="#FF6B6B" />

                  <IconBubble label="مفكرة" icon={<PenTool size={22} />} bgColor="#FEFBEA" iconColor="#E67E22" />
                  <IconBubble label="ملفي" icon={<MessageCircle size={22} fill="#A29BFE" />} bgColor="#F2F3FF" iconColor="#5F27CD" />
                  <IconBubble label="أذكار" icon={<Book size={22} />} bgColor="#FFF3E0" iconColor="#E67E22" />
                  <IconBubble label="إرشاد" icon={<Bookmark size={22} fill="#55E6C1" />} bgColor="#E3F9EC" iconColor="#009432" />
                </div>

                {/* 3. Filter Tab - Pill-shaped Segmented UI */}
                <div className="bg-[#F2F2F2] p-1 rounded-2xl flex items-center mb-6">
                  <button
                    onClick={() => setActiveTab('popular')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold text-xs ${activeTab === 'popular' ? 'bg-white shadow-sm text-[#1D1B4B]' : 'text-gray-400'}`}
                  >
                    <Flame size={16} className={activeTab === 'popular' ? 'text-orange-500' : ''} />
                    الأكثر شعبية
                  </button>
                  <button
                    onClick={() => setActiveTab('rising')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold text-xs ${activeTab === 'rising' ? 'bg-white shadow-sm text-[#1D1B4B]' : 'text-gray-400'}`}
                  >
                    <Star size={16} className={activeTab === 'rising' ? 'text-orange-500 shadow-sm shadow-orange-200' : ''} />
                    مقترح لك
                  </button>
                </div>

                {/* 4. Surah List Section */}
                <div className="space-y-3">
                  {surahs.map((surah, idx) => (
                    <div key={surah.id} className="bg-white p-4 rounded-2xl flex items-center gap-4 group transition-all hover:bg-gray-50/50">
                      <div className={`w-12 h-12 rounded-[18px] flex items-center justify-center ${idx === 3 ? 'bg-green-100' : 'bg-red-50'}`}>
                        <div className={`w-8 h-8 rounded-lg ${idx === 3 ? 'bg-green-500' : 'bg-red-400'} flex items-center justify-center text-white text-[10px] font-black`}>
                          {surah.id}
                        </div>
                      </div>
                      <div className="flex-1 text-right">
                        <h4 className="text-sm font-black text-[#1D1B4B]">{surah.name}</h4>
                        <p className="text-[10px] font-bold text-gray-300 mt-0.5">{surah.sub}</p>
                      </div>
                      {idx === 3 ? (
                        <button className="px-6 py-2.5 bg-[#FF6B4A] text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-orange-100">
                          ابدأ
                        </button>
                      ) : (
                        <CircularProgress percentage={surah.progress} color="#FFB84C" />
                      )}
                    </div>
                  ))}
                </div>

              </div>
            )}

            {currentView === 'tadabbur' && (
              <div className="animate-in fade-in duration-700">
                <div className="mb-10 text-right">
                  <h2 className="text-4xl lg:text-5xl font-black text-[#1D1B4B]">تأملات {selectedSurah.name}</h2>
                </div>
                <SurahTabs surah={selectedSurah} />
              </div>
            )}

          </div>
        </div>

        {/* Static Footer Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 h-[85px] bg-white border-t border-gray-100 flex items-center justify-around px-8 shrink-0 z-40 lg:hidden">
          <button onClick={() => setCurrentView('home')} className={`flex flex-col items-center gap-1.5 transition-all ${currentView === 'home' ? 'text-[#FF6B4A]' : 'text-gray-300'}`}>
            <Home size={22} strokeWidth={3} />
          </button>
          <button onClick={() => setCurrentView('tadabbur')} className={`flex flex-col items-center gap-1.5 transition-all ${currentView === 'tadabbur' ? 'text-[#FF6B4A]' : 'text-gray-300'}`}>
            <Compass size={22} strokeWidth={3} />
          </button>
          <button onClick={() => setCurrentView('mushaf')} className={`flex flex-col items-center gap-1.5 transition-all ${currentView === 'mushaf' ? 'text-[#FF6B4A]' : 'text-gray-300'}`}>
            <BookOpen size={22} strokeWidth={3} />
          </button>
        </div>
      </main>
    </div>
  );
};
