import React from 'react';
import { SurahSidebar } from './SurahSidebar';
import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: number) => void;
  selectedId: number;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onSelect, selectedId }) => {
  return (
    <>
      {/* Light Overlay */}
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Minimal Drawer Panel */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-[85%] max-w-[320px] bg-white z-[110] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-gray-100 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full overflow-hidden">

          {/* Header area in drawer - Minimal Close Only */}
          <div className="p-4 flex items-center justify-end border-b border-gray-50">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-lg transition-all"
            >
              <X size={16} />
            </button>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto scrollbar-hide no-scrollbar">
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
