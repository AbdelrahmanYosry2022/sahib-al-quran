import React, { useState } from 'react';
import { SurahSidebar } from './SurahSidebar';
import { SurahTabs } from './SurahTabs';
import { useSurahDetails } from '../hooks/useSurahDetails';

export const QuranDashboard: React.FC = () => {
  const [selectedSurahId, setSelectedSurahId] = useState<number | null>(1);
  const { details, loading, error } = useSurahDetails(selectedSurahId);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile Sidebar Toggle (Floating Button) */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg md:hidden"
      >
        {isSidebarOpen ? 'إغلاق' : 'الفهرس'}
      </button>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 ease-in-out md:block overflow-hidden`}>
        <SurahSidebar 
          selectedSurahId={selectedSurahId} 
          onSelectSurah={(id) => {
            setSelectedSurahId(id);
            if (window.innerWidth < 768) setIsSidebarOpen(false);
          }} 
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800">صاحب القرآن</h1>
          {details && <span className="text-lg text-blue-600 font-bold">{details.name}</span>}
        </header>

        <main className="flex-1 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full text-red-500">
              {error}
            </div>
          ) : details ? (
            <SurahTabs details={details} />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              اختر سورة من الفهرس للبدء
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
