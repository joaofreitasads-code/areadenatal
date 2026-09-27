import React, { useState, useEffect } from 'react';
import { CHRISTMAS_MODELS, ChristmasModel } from './data/driveModels';
import { Header } from './components/Header';
import { Sidebar, ChristmasCategoryFilter } from './components/Sidebar';
import { LibraryView } from './components/LibraryView';
import { AulasView } from './components/AulasView';
import { ModelDetailModal } from './components/ModelDetailModal';
import { PrintQueueModal } from './components/PrintQueueModal';
import { BonusPlanosModal } from './components/BonusPlanosModal';
import {
  Home,
  Layers,
  Heart,
  Printer,
  FolderDown,
} from 'lucide-react';

const FAVORITES_STORAGE_KEY = 'pack_natal_favorites_v2';
const DOWNLOADS_STORAGE_KEY = 'pack_natal_downloads_v2';
const QUEUE_STORAGE_KEY = 'pack_natal_queue_v2';

export default function App() {
  const [currentSidebarCategory, setCurrentSidebarCategory] = useState<ChristmasCategoryFilter>('inicio');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<ChristmasModel | null>(null);
  const [isBonusModalOpen, setIsBonusModalOpen] = useState<boolean>(false);
  const [isQueueOpen, setIsQueueOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [CHRISTMAS_MODELS[0].id, CHRISTMAS_MODELS[6].id];
    } catch {
      return [];
    }
  });

  // Downloads tracking state
  const [downloads, setDownloads] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(DOWNLOADS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [CHRISTMAS_MODELS[6].id];
    } catch {
      return [];
    }
  });

  // Print Queue state
  const [queue, setQueue] = useState<ChristmasModel[]>(() => {
    try {
      const saved = localStorage.getItem(QUEUE_STORAGE_KEY);
      if (saved) {
        const ids: string[] = JSON.parse(saved);
        return CHRISTMAS_MODELS.filter((m) => ids.includes(m.id));
      }
    } catch {
      // fallback
    }
    return [CHRISTMAS_MODELS[0], CHRISTMAS_MODELS[6]];
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(DOWNLOADS_STORAGE_KEY, JSON.stringify(downloads));
    } catch {}
  }, [downloads]);

  useEffect(() => {
    try {
      localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(queue.map((m) => m.id)));
    } catch {}
  }, [queue]);

  // Handle Ctrl + K shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement | null;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDirectDownload = (model: ChristmasModel) => {
    if (!downloads.includes(model.id)) {
      setDownloads((prev) => [...prev, model.id]);
    }
    // If model has files, trigger first download or open modal
    if (model.files.length > 0) {
      window.open(model.files[0].downloadUrl, '_blank');
    } else {
      window.open(model.driveFolderUrl, '_blank');
    }
  };

  const handleToggleQueue = (model: ChristmasModel) => {
    setQueue((prev) => {
      const exists = prev.some((m) => m.id === model.id);
      if (exists) {
        return prev.filter((m) => m.id !== model.id);
      } else {
        return [...prev, model];
      }
    });
  };

  const handleSelectSidebarCategory = (cat: ChristmasCategoryFilter) => {
    if (cat === 'bonus') {
      setIsBonusModalOpen(true);
    } else {
      setCurrentSidebarCategory(cat);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0C0E] text-white flex flex-col font-sans selection:bg-[#D4A359] selection:text-black antialiased">
      {/* 1. Global Top Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setCurrentSidebarCategory('favoritos')}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      {/* 2. Main Layout Container: Desktop Sidebar on Left + Content Area on Right */}
      <div className="flex-1 flex w-full">
        <Sidebar
          currentCategory={currentSidebarCategory}
          onSelectCategory={handleSelectSidebarCategory}
          favoritesCount={favorites.length}
          downloadsCount={downloads.length}
          isMobileOpen={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
        />

        {/* Right Content Area */}
        <main className="flex-1 min-w-0 bg-[#0E0F12] pb-20 md:pb-8">
          {currentSidebarCategory === 'aulas' ? (
            <AulasView />
          ) : (
            <LibraryView
              models={CHRISTMAS_MODELS}
              currentSidebarCategory={currentSidebarCategory}
              favorites={favorites}
              downloads={downloads}
              onToggleFavorite={handleToggleFavorite}
              onOpenModel={(model) => setSelectedModel(model)}
              onDirectDownload={handleDirectDownload}
              searchQuery={searchQuery}
            />
          )}
        </main>
      </div>

      {/* Desktop Floating Print Queue Button */}
      {queue.length > 0 && (
        <button
          type="button"
          onClick={() => setIsQueueOpen(true)}
          className="hidden md:flex fixed bottom-5 right-5 z-40 items-center gap-2.5 bg-[#D4A359] hover:bg-[#E5B869] active:scale-95 text-[#0B0C0E] font-bold text-xs py-3 px-4 rounded-2xl shadow-2xl transition-all cursor-pointer hover:scale-105"
        >
          <div className="w-5 h-5 rounded-lg bg-[#0B0C0E] text-[#D4A359] flex items-center justify-center font-bold text-xs">
            {queue.length}
          </div>
          <span>Fila de Impressão</span>
        </button>
      )}

      {/* 3. Mobile Bottom Navigation Bar (Super rápido e prático com 1 polegar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0D10]/95 backdrop-blur-xl border-t border-[#1F2026] flex items-center justify-around py-2 px-2 shadow-2xl">
        <button
          type="button"
          onClick={() => {
            setCurrentSidebarCategory('inicio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-colors cursor-pointer active:scale-95 ${
            currentSidebarCategory === 'inicio' ? 'text-[#E5B869]' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">Início</span>
        </button>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer active:scale-95"
        >
          <Layers className="w-5 h-5 mb-0.5 text-[#D4A359]" />
          <span className="text-[10px] font-semibold text-slate-300">Categorias</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setCurrentSidebarCategory('favoritos');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-colors cursor-pointer active:scale-95 ${
            currentSidebarCategory === 'favoritos' ? 'text-red-400' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Heart className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">Favoritos</span>
          {favorites.length > 0 && (
            <span className="absolute top-0.5 right-2 w-4 h-4 rounded-full bg-red-500 text-white font-bold text-[9px] flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setIsQueueOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-400 hover:text-[#E5B869] transition-colors cursor-pointer active:scale-95"
        >
          <Printer className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">Fila 3D</span>
          {queue.length > 0 && (
            <span className="absolute top-0.5 right-2 w-4 h-4 rounded-full bg-[#D4A359] text-[#0B0C0E] font-black text-[9px] flex items-center justify-center">
              {queue.length}
            </span>
          )}
        </button>

        <a
          href="https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[#E5B869] hover:text-white transition-colors cursor-pointer active:scale-95"
        >
          <FolderDown className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold">Drive ↗</span>
        </a>
      </nav>

      {/* 4. Detailed Model Modal */}
      {selectedModel && (
        <ModelDetailModal
          model={selectedModel}
          onClose={() => setSelectedModel(null)}
          isInQueue={queue.some((m) => m.id === selectedModel.id)}
          onToggleQueue={handleToggleQueue}
        />
      )}

      {/* 5. Print Queue Modal */}
      {isQueueOpen && (
        <PrintQueueModal
          queue={queue}
          onClose={() => setIsQueueOpen(false)}
          onRemove={(id) => setQueue((prev) => prev.filter((m) => m.id !== id))}
          onClear={() => setQueue([])}
          onOpenModel={(m) => {
            setIsQueueOpen(false);
            setSelectedModel(m);
          }}
        />
      )}

      {/* 6. Plans & Bonus Modal */}
      {isBonusModalOpen && (
        <BonusPlanosModal onClose={() => setIsBonusModalOpen(false)} />
      )}
    </div>
  );
}
