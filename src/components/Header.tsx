import React, { useState } from 'react';
import { CHRISTMAS_MODELS } from '../data/driveModels';
import {
  Search,
  Bell,
  Check,
  FolderDown,
  Sparkles,
  ExternalLink,
  Menu,
} from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenNotifications?: () => void;
  onToggleMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  favoritesCount,
  onOpenFavorites,
  onToggleMobileMenu,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: `${CHRISTMAS_MODELS.length} Modelos Natalinos Sincronizados`,
      time: 'Agora mesmo',
      unread: true,
      text: `Todos os ${CHRISTMAS_MODELS.length} arquivos STL com fotos reais da coleção de Natal estão disponíveis.`,
    },
    {
      id: 2,
      title: 'Novo: Presépio Sagrada Família com Arco',
      time: 'Hoje',
      unread: true,
      text: 'Modelo completo com Menino Jesus, Maria, José, Estrela e Cuna disponível para download.',
    },
    {
      id: 3,
      title: 'Dica de Fatiamento: Suportes em Árvore',
      time: 'Ontem',
      unread: false,
      text: 'Economize até 40% de filamento em miniaturas e estátuas de Papai Noel.',
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0E0F12]/95 backdrop-blur-md border-b border-[#1F2026] px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2.5 sm:gap-4">
      {/* Left Menu (Mobile) + Logo & Tagline */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Mobile Hamburger Drawer Button */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="md:hidden w-9 h-9 rounded-xl bg-[#15161A] active:bg-[#20222A] border border-[#26282E] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Abrir Menu de Categorias"
        >
          <Menu className="w-5 h-5 text-[#E5B869]" />
        </button>

        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#E5B869] via-[#D4A359] to-[#B38338] text-[#0B0C0E] flex items-center justify-center font-bold shadow-md shadow-[#D4A359]/10">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B0C0E]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L9.5 8H14L10 13H15L8 22L10 15H5L12 2Z" />
          </svg>
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5 leading-none mb-1">
            <span>Biblioteca Natalina 3D</span>
            <span className="text-[9px] bg-[#D4A359]/20 text-[#E5B869] border border-[#D4A359]/30 px-1.5 py-0.5 rounded font-bold uppercase">
              PRO
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-[#D4A359] uppercase block leading-none">
            ARTE QUE ENCANTA NO NATAL
          </span>
        </div>
      </div>

      {/* Center Search Bar */}
      <div className="flex-1 max-w-xl mx-auto min-w-0">
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 sm:left-4 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por Papai Noel, Árvore, Rena..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#15161A] hover:bg-[#18191E] focus:bg-[#18191E] border border-[#26282E] focus:border-[#D4A359] rounded-full pl-9 sm:pl-11 pr-8 sm:pr-20 py-1.5 sm:py-2 text-xs text-white placeholder-slate-400 focus:outline-none transition-all shadow-inner"
          />
          <div className="absolute right-2.5 sm:right-3 flex items-center gap-1">
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-[#21232A] rounded border border-[#2E313A]">
              Ctrl + K
            </kbd>
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="text-[11px] text-slate-400 hover:text-white px-1.5 py-0.5 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right User & Actions Area */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Drive link quick button (Desktop) */}
        <a
          href="https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:flex items-center gap-1.5 text-xs text-[#E5B869] hover:text-white bg-[#1A1A1E] hover:bg-[#222329] border border-[#2A2B33] px-3 py-1.5 rounded-full transition-all cursor-pointer"
          title="Abrir Pasta Oficial no Google Drive"
        >
          <FolderDown className="w-3.5 h-3.5" />
          <span>Drive Oficial ({CHRISTMAS_MODELS.length} STL)</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>

        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-8 h-8 rounded-full bg-[#15161A] hover:bg-[#1E2026] active:bg-[#252830] border border-[#26282E] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Notificações"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4A359] border-2 border-[#0E0F12]" />
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-[#16171C] border border-[#262831] rounded-2xl shadow-2xl p-3 z-50 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-[#21232B] mb-2 px-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5B869]" /> Notificações do Pack
                </span>
                <span className="text-[10px] text-slate-400">3 recentes</span>
              </div>
              <div className="space-y-2 max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-2.5 rounded-xl bg-[#1C1E24] hover:bg-[#22252C] transition-colors cursor-pointer border border-[#282B34]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white line-clamp-1">
                        {n.title}
                      </span>
                      {n.unread && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5B869] shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                      {n.text}
                    </p>
                    <span className="text-[9px] text-slate-400 mt-1.5 block">
                      {n.time}
                    </span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowNotifications(false)}
                className="w-full mt-2 py-1.5 text-center text-xs text-slate-400 hover:text-white rounded-lg hover:bg-[#22242B] transition-colors"
              >
                Fechar
              </button>
            </div>
          )}
        </div>

        {/* User Profile Pill */}
        <div className="flex items-center gap-2 pl-1 border-l border-[#1F2026]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4A359] to-[#E5B869] p-0.5 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#121316] flex items-center justify-center font-bold text-xs text-[#E5B869]">
              JV
            </div>
          </div>
          <div className="hidden md:block leading-none">
            <div className="text-xs font-bold text-white flex items-center gap-1">
              <span>Aluno VIP</span>
              <Check className="w-3 h-3 text-[#E5B869]" />
            </div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">
              Pack Vitalício
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
