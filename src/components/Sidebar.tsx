import React from 'react';
import {
  Home,
  User,
  Trees,
  Compass,
  Sun,
  Church,
  Layers,
  Heart,
  Download,
  Gift,
  BookOpen,
  FolderDown,
  Sparkles,
  ExternalLink,
  X,
} from 'lucide-react';

export type ChristmasCategoryFilter =
  | 'inicio'
  | 'papai_noel'
  | 'arvores'
  | 'renas'
  | 'luminarias'
  | 'presepios'
  | 'utilidades'
  | 'favoritos'
  | 'downloads'
  | 'aulas'
  | 'bonus';

interface SidebarProps {
  currentCategory: ChristmasCategoryFilter;
  onSelectCategory: (cat: ChristmasCategoryFilter) => void;
  favoritesCount: number;
  downloadsCount: number;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentCategory,
  onSelectCategory,
  favoritesCount,
  downloadsCount,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const primaryNav: {
    id: ChristmasCategoryFilter;
    label: string;
    icon: React.ReactNode;
    badge?: string;
  }[] = [
    { id: 'inicio', label: 'Início (Todos)', icon: <Home className="w-4 h-4" /> },
    {
      id: 'papai_noel',
      label: 'Papai Noel & Figuras',
      icon: <User className="w-4 h-4" />,
      badge: '41 STL',
    },
    {
      id: 'arvores',
      label: 'Árvores & Pinheiros',
      icon: <Trees className="w-4 h-4 text-emerald-400" />,
      badge: '29 STL',
    },
    {
      id: 'renas',
      label: 'Renas & Animais',
      icon: <Compass className="w-4 h-4" />,
      badge: '13 STL',
    },
    {
      id: 'luminarias',
      label: 'Luminárias & Luzes',
      icon: <Sun className="w-4 h-4 text-[#E5B869]" />,
      badge: '6 STL',
    },
    {
      id: 'presepios',
      label: 'Presépios & Sagrado',
      icon: <Church className="w-4 h-4 text-[#E5B869]" />,
      badge: 'Especial',
    },
    {
      id: 'utilidades',
      label: 'Cortadores & Acessórios',
      icon: <Layers className="w-4 h-4" />,
      badge: '8 STL',
    },
  ];

  const secondaryNav: {
    id: ChristmasCategoryFilter;
    label: string;
    icon: React.ReactNode;
    counter?: number;
  }[] = [
    {
      id: 'favoritos',
      label: 'Meus Favoritos',
      icon: <Heart className="w-4 h-4" />,
      counter: favoritesCount,
    },
    {
      id: 'downloads',
      label: 'Mais Baixados',
      icon: <Download className="w-4 h-4" />,
      counter: downloadsCount,
    },
    {
      id: 'aulas',
      label: 'Aulas & Dicas 3D',
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      id: 'bonus',
      label: 'Planos e Bônus VIP',
      icon: <Gift className="w-4 h-4 text-[#E5B869]" />,
    },
  ];

  const handleItemClick = (cat: ChristmasCategoryFilter) => {
    onSelectCategory(cat);
    if (onCloseMobile) onCloseMobile();
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between bg-[#0D0E11] text-white">
      {/* Navigation List */}
      <div className="p-3.5 space-y-4 overflow-y-auto scrollbar-none flex-1">
        {/* Mobile Header Close button */}
        <div className="md:hidden flex items-center justify-between pb-2 border-b border-[#1F2026]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B869]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Categorias do Pack
            </span>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="w-8 h-8 rounded-lg bg-[#181920] text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Primary Categories */}
        <div className="space-y-1">
          <div className="px-3 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Categorias de Natal
          </div>
          {primaryNav.map((item) => {
            const isActive = currentCategory === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer active:scale-98 ${
                  isActive
                    ? 'bg-[#1D1E24] text-white border border-[#30333D] font-bold shadow-sm'
                    : 'text-[#9496A1] hover:text-white hover:bg-[#15161A]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className={isActive ? 'text-[#E5B869]' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold shrink-0 ${
                      item.badge === 'Especial'
                        ? 'bg-[#E5B869]/20 text-[#E5B869] border border-[#E5B869]/30'
                        : 'bg-[#22242B] text-slate-400 border border-[#2D3039]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Secondary Navigation */}
        <div className="border-t border-[#1F2026]/80 pt-3.5 space-y-1">
          <div className="px-3 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Painel do Aluno
          </div>
          {secondaryNav.map((item) => {
            const isActive = currentCategory === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer active:scale-98 ${
                  isActive
                    ? 'bg-[#1D1E24] text-white border border-[#30333D] font-bold'
                    : 'text-[#9496A1] hover:text-white hover:bg-[#15161A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? 'text-[#E5B869]' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.counter !== undefined && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1F2026] text-slate-300 font-bold">
                    {item.counter}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Direct Google Drive Folder Link */}
        <div className="border-t border-[#1F2026]/80 pt-2.5">
          <a
            href="https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-[#E5B869] hover:text-white bg-[#1A1813] hover:bg-[#252219] border border-[#E5B869]/30 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <FolderDown className="w-4 h-4 text-[#E5B869]" />
              <span className="font-semibold">Pasta Google Drive</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
          </a>
        </div>
      </div>

      {/* Bottom Storage & VIP Membership Status Widget */}
      <div className="p-3 border-t border-[#1F2026] bg-[#0A0B0D]">
        <div className="bg-gradient-to-b from-[#16171D] to-[#121317] border border-[#262831] rounded-2xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#E5B869] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#E5B869]" /> Acesso Vitalício
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <p className="text-xs text-white font-bold leading-tight">
            100 Modelos Natalinos STL
          </p>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Drive Sincronizado</span>
              <span className="text-[#E5B869] font-mono font-bold">100 / 100</span>
            </div>
            <div className="w-full h-1.5 bg-[#20222A] rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-[#D4A359] to-emerald-400 rounded-full" />
            </div>
          </div>

          <a
            href="https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center py-1.5 text-[11px] font-bold text-[#0B0C0E] bg-[#D4A359] hover:bg-[#E5B869] active:scale-98 rounded-lg transition-colors shadow-sm"
          >
            Abrir Drive Oficial
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Desktop Persistent Sidebar */}
      <aside className="hidden md:flex flex-col w-60 lg:w-64 border-r border-[#1F2026] shrink-0 select-none sticky top-[57px] h-[calc(100vh-57px)]">
        {navContent}
      </aside>

      {/* 2. Mobile Slide-Over Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop blur */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />
          {/* Drawer container */}
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-fadeIn">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};
