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
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 start-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold text-emerald-900">صاحب القرآن</h2>
            <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-800">
              {/* Close Icon (X) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <SurahSidebar 
              onSelect={(id) => {
                onSelect(id);
                onClose();
              }} 
              selectedId={selectedId} 
            />
          </div>
        </div>
      </div>
    </>
  );
};
