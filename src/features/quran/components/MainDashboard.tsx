import React, { useState } from 'react';
import { useSurahDetails } from '../hooks/useSurahDetails';
import { useNavigation } from '../hooks/useNavigation';
import { SurahSidebar } from './SurahSidebar';
import { SurahTabs } from './SurahTabs';
import { MobileDrawer } from './MobileDrawer';
import {
  Menu,
  Settings,
  User,
  BookOpen,
  Calendar,
  Layers,
  Home,
  Compass
} from 'lucide-react';

type DashboardView = 'home' | 'tadabbur' | 'mushaf' | 'profile';

export const MainDashboard: React.FC = () => {
  const { selectedSurah, selectedSurahId, selectSurah } = useSurahDetails(1);
  const { isDrawerOpen, toggleDrawer, closeDrawer } = useNavigation();
  const [currentView, setCurrentView] = useState<DashboardView>('home');

  const handleSelectSurah = (id: number) => {
    selectSurah(id);
    setCurrentView('tadabbur');
    closeDrawer();
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-graphik antialiased text-black" dir="rtl">
      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        onSelect={handleSelectSurah}
        selectedId={selectedSurahId}
      />

      {/* Persistent Sidebar (Desktop Only) */}
      <aside className="hidden lg:flex w-[320px] h-full flex-col z-40 bg-[#FBFBFA] border-l border-gray-100">
        <SurahSidebar onSelect={handleSelectSurah} selectedId={selectedSurahId} />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">

        {/* Modern Minimal Header */}
        <header className="h-[70px] flex items-center justify-between px-6 lg:px-10 z-30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-100 overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">مرحباً بك مجدداً</p>
              <p className="text-sm font-bold text-gray-800">صاحب القرآن</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center nav-item lg:hidden shadow-none" onClick={toggleDrawer}>
              <Menu size={18} className="text-gray-700" />
            </button>
            <button className="w-9 h-9 items-center justify-center nav-item hidden lg:flex shadow-none">
              <Settings size={18} className="text-gray-400" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 py-6">

            {currentView === 'home' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Greeting */}
                <div className="mb-10 text-right">
                  <p className="text-gray-400 text-xs font-medium mb-1.5">4 مارس، 2026</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-black leading-tight tracking-tight">
                    أهلاً بك! كيف حال قلبك <br />
                    مع القرآن اليوم؟
                  </h2>
                </div>

                {/* Quick States */}
                <div className="flex gap-3 overflow-x-auto pb-8 scrollbar-hide no-scrollbar rtl:flex-row-reverse">
                  {[
                    { label: 'متفائل', emoji: '😊' },
                    { label: 'هادئ', emoji: '😌' },
                    { label: 'مشتاق', emoji: '✨' },
                    { label: 'متدبر', emoji: '📖' },
                  ].reverse().map((item, idx) => (
                    <button
                      key={idx}
                      className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F7] hover:bg-gray-200 transition-colors active:scale-95 border-none"
                    >
                      <span className="text-lg">{item.emoji}</span>
                      <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div
                    onClick={() => setCurrentView('tadabbur')}
                    className="col-span-4 lg:col-span-2 bento-card bg-[#E8E1FF] text-purple-950 flex flex-col justify-end min-h-[170px] cursor-pointer hover:bg-[#dfd7ff] transition-colors"
                  >
                    <div>
                      <p className="text-purple-900/40 text-[10px] font-bold uppercase tracking-widest mb-1">السورة الحالية</p>
                      <h3 className="text-4xl font-black leading-none mb-3">سورة {selectedSurah.name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-purple-900/60 font-bold">انقر للتفاصيل والتأمل</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-1 bento-card bg-[#FFE5D4] flex flex-col justify-between h-[170px]">
                    <div className="w-8 h-8 rounded-lg bg-orange-400/10 flex items-center justify-center text-orange-600">
                      <Layers size={16} />
                    </div>
                    <div>
                      <p className="text-orange-900/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">عدد الآيات</p>
                      <p className="text-2xl font-black text-orange-950">{selectedSurah.versesCount}</p>
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-1 bento-card bg-[#D6F1FF] flex flex-col justify-between h-[170px]">
                    <div className="w-8 h-8 rounded-lg bg-blue-400/10 flex items-center justify-center text-blue-600">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-blue-900/40 text-[10px] font-bold uppercase tracking-wider mb-0.5">مكان النزول</p>
                      <p className="text-xl font-black text-blue-950">
                        {selectedSurah.revelationType === 'MAKKI' ? 'مكية' : 'مدنية'}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-4 lg:col-span-2 bento-card bg-[#D4FADA] border-none shadow-none">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-bold text-green-800 uppercase tracking-widest">تحدي اليوم</span>
                      <span className="text-[10px] font-bold text-green-700/40">سؤال 1/5</span>
                    </div>
                    <p className="text-lg font-black text-green-950 mb-6 leading-tight">
                      هل قرأت وردك اليومي من القرآن بتمعن؟
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-3 bg-black text-white rounded-xl font-bold text-xs active:scale-95 transition-all">نعم</button>
                      <button className="py-3 bg-white text-black border border-green-200/50 rounded-xl font-bold text-xs active:scale-95 transition-all">ليس بعد</button>
                    </div>
                  </div>

                  <div className="col-span-4 lg:col-span-2 bento-card bg-[#F5F5F7] flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">الإنجاز الأسبوعي</p>
                    </div>
                    <div className="flex items-end gap-1.5 h-20 mb-2">
                      {[35, 65, 40, 85, 55, 75, 50].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gray-200 rounded-[4px] hover:bg-black transition-colors"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      <p className="text-lg font-black text-black">24 صفحة</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">هذا الأسبوع</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentView === 'tadabbur' && (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="mb-6 text-right">
                  <h2 className="text-3xl font-black text-black underline underline-offset-8 decoration-gray-100 decoration-4">تأملات سورة {selectedSurah.name}</h2>
                </div>
                <SurahTabs surah={selectedSurah} />
              </div>
            )}

            {currentView === 'mushaf' && (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
                <BookOpen size={48} className="text-gray-100 mb-4" />
                <h2 className="text-2xl font-black text-black">المصحف الشريف</h2>
                <p className="text-gray-400 text-sm mt-2">جارٍ تجهيز عرض المصحف التفاعلي...</p>
              </div>
            )}

            {currentView === 'profile' && (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
                <User size={48} className="text-gray-100 mb-4" />
                <h2 className="text-2xl font-black text-black">ملفي الشخصي</h2>
                <p className="text-gray-400 text-sm mt-2">إحصائياتك وإنجازاتك هنا قريباً...</p>
              </div>
            )}

          </div>
        </div>

        {/* Minimal Static Bottom Nav */}
        <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-white border-t border-gray-100 flex items-center justify-around px-8 z-50 lg:hidden shadow-none">
          <button
            onClick={() => setCurrentView('home')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'home' ? 'text-black' : 'text-gray-300'}`}
          >
            <Home size={22} strokeWidth={currentView === 'home' ? 2.5 : 2} />
            <span className="text-[9px] font-black uppercase tracking-widest">الرئيسية</span>
          </button>
          <button
            onClick={() => setCurrentView('tadabbur')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'tadabbur' ? 'text-black' : 'text-gray-300'}`}
          >
            <Compass size={22} strokeWidth={currentView === 'tadabbur' ? 2.5 : 2} />
            <span className="text-[9px] font-black uppercase tracking-widest">التدبر</span>
          </button>
          <button
            onClick={() => setCurrentView('mushaf')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'mushaf' ? 'text-black' : 'text-gray-300'}`}
          >
            <BookOpen size={22} strokeWidth={currentView === 'mushaf' ? 2.5 : 2} />
            <span className="text-[9px] font-bold uppercase tracking-widest">المصحف</span>
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'profile' ? 'text-black' : 'text-gray-300'}`}
          >
            <User size={22} strokeWidth={currentView === 'profile' ? 2.5 : 2} />
            <span className="text-[9px] font-bold uppercase tracking-widest">ملفي</span>
          </button>
        </div>
      </main>
    </div>
  );
};
