import React from 'react';
import { useSurahDetails } from '../hooks/useSurahDetails';
import { useNavigation } from '../hooks/useNavigation';
import { SurahSidebar } from './SurahSidebar';
import { SurahTabs } from './SurahTabs';
import { MobileDrawer } from './MobileDrawer';

export const MainDashboard: React.FC = () => {
  const { selectedSurah, selectedSurahId, selectSurah } = useSurahDetails(1);
  const { isDrawerOpen, toggleDrawer, closeDrawer } = useNavigation();

  return (
    <div className="flex h-[100dvh] bg-[#FDFCF9] overflow-hidden font-noto antialiased">
      {/* Mobile Drawer (Sheets replacement) */}
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={closeDrawer} 
        onSelect={selectSurah} 
        selectedId={selectedSurahId} 
      />

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-[360px] h-full border-e border-stone-100/50 bg-white/40 backdrop-blur-xl">
        <SurahSidebar onSelect={selectSurah} selectedId={selectedSurahId} />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Modern Navbar Header */}
        <header className="h-[88px] bg-white/60 backdrop-blur-xl border-b border-stone-100 flex items-center justify-between px-6 lg:px-12 sticky top-0 z-30 transition-all">
          <button 
            onClick={toggleDrawer} 
            className="lg:hidden w-12 h-12 flex items-center justify-center text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-2xl transition-all active:scale-95"
          >
            {/* Elegant Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          </button>
          
          <div className="flex items-center gap-3">
             <div className="text-right flex flex-col items-center">
               <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-0.5">تطبيق</span>
               <h1 className="text-xl font-black text-emerald-950 font-amiri tracking-tight">صاحب القرآن</h1>
             </div>
          </div>

          <div className="flex gap-2 items-center">
            <button className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors">🔍</button>
            <button className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors">⚙️</button>
          </div>
        </header>

        {/* Dynamic Background Element */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-stone-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
          <div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
            
            {/* Page Title & Surah Info */}
            <div className="mb-12 text-center lg:text-right relative">
              <div className="flex flex-col items-center lg:items-end gap-2">
                <span className="inline-flex items-center px-4 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-black rounded-full uppercase tracking-widest shadow-sm">
                   سورة {selectedSurah.name}
                </span>
                <h2 className="text-5xl lg:text-7xl font-black text-stone-900 tracking-tighter font-amiri mt-2 drop-shadow-sm leading-tight">
                   {selectedSurah.name}
                </h2>
                <div className="w-24 h-1.5 bg-emerald-600 rounded-full mt-4 opacity-80" />
              </div>
            </div>
            
            {/* Main Tabs Interaction Area */}
            <div className="flex-1 min-h-[600px]">
              <SurahTabs surah={selectedSurah} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
