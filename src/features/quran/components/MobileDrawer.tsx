import React from 'react';
import { SurahSidebar } from './SurahSidebar';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: number) => void;
  selectedId: number;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onSelect, selectedId }) => {
  return (
    <>
      {/* Heavy Blur Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900/60 backdrop-blur-md z-[100] transition-all duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sophisticated Drawer Panel */}
      <div 
        className={`fixed top-0 bottom-0 right-0 w-[85%] max-w-[420px] bg-white z-[110] transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          
          {/* Header area in drawer */}
          <div className="p-10 border-b border-stone-50 flex items-center justify-between bg-white relative">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-900/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path></svg>
               </div>
               <div className="text-right">
                  <h2 className="text-2xl font-black text-stone-900 tracking-tight font-noto">صاحب القرآن</h2>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">Surah Explorer</p>
               </div>
             </div>
             
             <button 
                onClick={onClose} 
                className="w-14 h-14 flex items-center justify-center text-stone-400 bg-stone-50 hover:bg-stone-100 hover:text-stone-900 rounded-[22px] transition-all active:scale-90"
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </button>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <SurahSidebar 
              onSelect={(id) => {
                onSelect(id);
                onClose();
              }} 
              selectedId={selectedId} 
            />
          </div>
          
          {/* Footer in drawer */}
          <div className="p-10 border-t border-stone-50 bg-stone-50/20 text-center">
             <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-3">Powered by</p>
             <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-black text-emerald-900">ABDELRAHMAN</span>
                <span className="w-1 h-1 bg-stone-300 rounded-full" />
                <span className="text-xs font-black text-stone-700">CLAW</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};
