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
      {/* Overlay with modern blur */}
      <div 
        className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer Panel with high-end glassmorphism effect */}
      <div 
        className={`fixed top-0 inset-y-0 start-0 w-[85%] max-w-[340px] bg-white z-[60] transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden relative">
          
          {/* Header area in drawer */}
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/50 backdrop-blur-xl">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold">ص</div>
               <h2 className="text-xl font-black text-stone-800 tracking-tight font-noto">صاحب القرآن</h2>
             </div>
             
             <button 
                onClick={onClose} 
                className="w-10 h-10 flex items-center justify-center text-stone-500 bg-white hover:bg-stone-100 rounded-2xl transition-all shadow-sm active:scale-95"
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </button>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto no-scrollbar py-4">
            <SurahSidebar 
              onSelect={(id) => {
                onSelect(id);
                onClose();
              }} 
              selectedId={selectedId} 
            />
          </div>
          
          {/* Bottom Branding / Footer in drawer */}
          <div className="p-8 border-t border-stone-100 bg-stone-50/30 text-center">
             <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Developed by</p>
             <p className="text-sm font-black text-stone-700 uppercase tracking-tight">Abdelrahman & Claw</p>
          </div>
        </div>
      </div>
    </>
  );
};
