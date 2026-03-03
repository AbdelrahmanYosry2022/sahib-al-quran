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
    <div className="flex h-[100dvh] bg-[#F9F8F6] overflow-hidden font-noto antialiased selection:bg-emerald-100 selection:text-emerald-900" dir="rtl">
      
      {/* Mobile Drawer (Only for Mobile) */}
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={closeDrawer} 
        onSelect={selectSurah} 
        selectedId={selectedSurahId} 
      />

      {/* Persistent Sidebar (Desktop Only) */}
      <aside className="hidden lg:flex w-[400px] h-full flex-col z-40 bg-white shadow-2xl shadow-stone-200 border-l border-stone-100/50">
        <SurahSidebar onSelect={selectSurah} selectedId={selectedSurahId} />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Elegant Top Header */}
        <header className="h-[96px] bg-white/70 backdrop-blur-3xl border-b border-stone-100 flex items-center justify-between px-8 lg:px-12 sticky top-0 z-30 shadow-sm transition-all">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleDrawer} 
            className="lg:hidden w-14 h-14 flex items-center justify-center text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-[22px] transition-all active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          
          {/* Branding (Centered on Mobile, End on Desktop) */}
          <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start">
             <div className="text-right flex flex-col">
               <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-0.5">صاحب القرآن</span>
               <h1 className="text-2xl font-black text-stone-900 font-amiri tracking-tight">سورة {selectedSurah.name}</h1>
             </div>
          </div>

          {/* Quick Actions */}
          <div className="hidden md:flex gap-3 items-center">
            <button className="w-12 h-12 bg-stone-50 text-stone-400 rounded-2xl flex items-center justify-center hover:bg-stone-100 hover:text-stone-800 transition-all border border-stone-100/50 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button className="w-12 h-12 bg-stone-50 text-stone-400 rounded-2xl flex items-center justify-center hover:bg-stone-100 hover:text-stone-800 transition-all border border-stone-100/50 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
        </header>

        {/* Dynamic Background Art */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

        {/* Main Scrolling Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide py-10 lg:py-14 px-4 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col h-full">
            
            {/* Header Content Section */}
            <div className="mb-14 text-center lg:text-right flex flex-col items-center lg:items-start gap-3 relative">
              <span className="inline-flex items-center px-5 py-2 bg-emerald-100 text-emerald-900 text-xs font-black rounded-full uppercase tracking-widest border border-emerald-200/50 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
                   {selectedSurah.revelationType === 'MAKKI' ? 'سورة مكية' : 'سورة مدنية'} • {selectedSurah.versesCount} آيات
              </span>
              <h2 className="text-6xl lg:text-8xl font-black text-stone-900 font-amiri tracking-tighter mt-4 drop-shadow-sm leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700">
                 {selectedSurah.name}
              </h2>
              <div className="w-32 h-2 bg-emerald-900 rounded-full mt-6 opacity-80" />
            </div>
            
            {/* Content Tabs Wrapper */}
            <div className="flex-1 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <SurahTabs surah={selectedSurah} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
