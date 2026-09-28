import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  BarChart3,
  Sparkles,
  ArrowUpDown,
  Filter,
  Zap,
  ChevronDown,
} from 'lucide-react';
import { ChristmasModel } from '../data/driveModels';
import { ModelCard } from './ModelCard';
import { ChristmasCategoryFilter } from './Sidebar';
import { preloadCriticalImages } from '../utils/imageOptimizer';

interface LibraryViewProps {
  models: ChristmasModel[];
  currentSidebarCategory: ChristmasCategoryFilter;
  favorites: string[];
  downloads: string[];
  onToggleFavorite: (id: string) => void;
  onOpenModel: (model: ChristmasModel) => void;
  onDirectDownload: (model: ChristmasModel) => void;
  searchQuery: string;
}

const FILTER_PILLS = [
  'Todos',
  'Papai Noel',
  'Árvores',
  'Renas',
  'Luminárias',
  'Presépios',
  'Cortadores',
  'Kit Cards',
  'Articulados',
  'Bustos',
] as const;

export const LibraryView: React.FC<LibraryViewProps> = ({
  models,
  currentSidebarCategory,
  favorites,
  downloads,
  onToggleFavorite,
  onOpenModel,
  onDirectDownload,
  searchQuery,
}) => {
  const [selectedPill, setSelectedPill] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<'recent' | 'downloads' | 'time' | 'weight'>('recent');
  const [supportFilter, setSupportFilter] = useState<'all' | 'none' | 'tree'>('all');
  
  // Renderização em lotes de 24 (múltiplo de 2, 3 e 4 colunas) para 60fps instantâneo
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);
  const downloadsSet = useMemo(() => new Set(downloads), [downloads]);

  // Dynamic Page Title & Subtitle based on sidebar navigation
  const getHeaderInfo = () => {
    switch (currentSidebarCategory) {
      case 'papai_noel':
        return {
          title: 'Papai Noel, Bustos & Personagens',
          subtitle: 'Estátuas de Papai Noel clássico, bad santa, rock star, bustos realistas, Deadpool e miniaturas.',
        };
      case 'arvores':
        return {
          title: 'Árvores & Pinheiros de Natal',
          subtitle: 'Coleção completa de pinheiros esculpidos, árvores retráteis print-in-place e kit cards montáveis.',
        };
      case 'renas':
        return {
          title: 'Renas, Galhadas & Animais Natalinos',
          subtitle: 'Renas geométricas low-poly, suportes de celular, troféus de parede e kit cards de montagem.',
        };
      case 'luminarias':
        return {
          title: 'Luminárias LED & Decoração de Luz',
          subtitle: 'Projetos de abajures, cúpulas para fita LED, estrelas vazadas e cenários iluminados de Natal.',
        };
      case 'presepios':
        return {
          title: 'Presépios Sagrados & Belém 3D',
          subtitle: 'Presépio completo com Sagrada Família, Menino Jesus, Maria, José, Estrela Guia e Anjos.',
        };
      case 'utilidades':
        return {
          title: 'Cortadores de Biscoito & Utilidades',
          subtitle: 'Cortadores para confeitaria natalina, porta-chaves de parede, relógio e suportes decorativos.',
        };
      case 'favoritos':
        return {
          title: 'Meus Modelos Favoritos',
          subtitle: 'Sua lista pessoal de arquivos salvos para fatiar e imprimir nesta temporada de Natal.',
        };
      case 'downloads':
        return {
          title: 'Modelos Mais Populares & Baixados',
          subtitle: 'Os arquivos mais procurados e com maior volume de downloads por impressores 3D.',
        };
      default:
        return {
          title: 'Biblioteca por categorias',
          subtitle: `${models.length} modelos 3D exclusivos de Natal para imprimir, decorar e lucrar nesta temporada.`,
        };
    }
  };

  const headerInfo = getHeaderInfo();

  // Filter models
  const filteredModels = useMemo(() => {
    return models
      .filter((model) => {
        // 1. Sidebar Category filter
        if (currentSidebarCategory === 'papai_noel' && model.category !== 'papai_noel') return false;
        if (currentSidebarCategory === 'arvores' && model.category !== 'arvores') return false;
        if (currentSidebarCategory === 'renas' && model.category !== 'renas') return false;
        if (currentSidebarCategory === 'luminarias' && model.category !== 'luminarias') return false;
        if (currentSidebarCategory === 'presepios' && model.category !== 'presepios') return false;
        if (currentSidebarCategory === 'utilidades' && model.category !== 'utilidades') return false;
        if (currentSidebarCategory === 'favoritos' && !favoritesSet.has(model.id)) return false;
        if (currentSidebarCategory === 'downloads' && model.downloadsCount < 10000) return false;

        // 2. Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matches =
            model.title.toLowerCase().includes(q) ||
            model.folderName.toLowerCase().includes(q) ||
            model.categoryLabel.toLowerCase().includes(q) ||
            model.tagType.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // 3. Filter pill
        if (selectedPill !== 'Todos') {
          if (selectedPill === 'Papai Noel' && model.category !== 'papai_noel') return false;
          if (selectedPill === 'Árvores' && model.category !== 'arvores') return false;
          if (selectedPill === 'Renas' && model.category !== 'renas') return false;
          if (selectedPill === 'Luminárias' && model.category !== 'luminarias') return false;
          if (selectedPill === 'Presépios' && model.category !== 'presepios') return false;
          if (selectedPill === 'Cortadores' && model.tagType !== 'Cortador') return false;
          if (selectedPill === 'Kit Cards' && model.tagType !== 'Kit Card') return false;
          if (selectedPill === 'Articulados' && model.tagType !== 'Articulado') return false;
          if (selectedPill === 'Bustos' && model.tagType !== 'Busto') return false;
        }

        // 4. Support filter
        if (supportFilter === 'none') {
          if (!model.specs.supports.includes('Sem suportes')) return false;
        } else if (supportFilter === 'tree') {
          if (!model.specs.supports.includes('árvore')) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'downloads') return b.downloadsCount - a.downloadsCount;
        if (sortBy === 'time') return a.specs.printTimeHours - b.specs.printTimeHours;
        if (sortBy === 'weight') return a.specs.weightGrams - b.specs.weightGrams;
        return a.number - b.number;
      });
  }, [models, currentSidebarCategory, favoritesSet, downloadsSet, searchQuery, selectedPill, supportFilter, sortBy]);

  // Reset visual batch when filters change
  useEffect(() => {
    setVisibleCount(24);
  }, [currentSidebarCategory, selectedPill, searchQuery, sortBy, supportFilter]);

  // Pre-carrega imagens críticas das primeiras posições
  useEffect(() => {
    if (filteredModels.length > 0) {
      preloadCriticalImages(filteredModels.map((m) => m.imageUrl));
    }
  }, [filteredModels]);

  // Antecipa download do próximo lote ao rolar a tela
  useEffect(() => {
    if (visibleCount < filteredModels.length) {
      const nextBatchUrls = filteredModels
        .slice(visibleCount, visibleCount + 16)
        .map((m) => m.imageUrl);
      preloadCriticalImages(nextBatchUrls);
    }
  }, [visibleCount, filteredModels]);

  // Infinite scroll ultra responsivo com IntersectionObserver (antecipa 900px antes do rodapé)
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 24, filteredModels.length));
        }
      },
      { rootMargin: '900px' }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [filteredModels.length]);

  const displayedModels = useMemo(() => {
    return filteredModels.slice(0, visibleCount);
  }, [filteredModels, visibleCount]);

  return (
    <div className="flex-1 min-h-[calc(100vh-65px)] bg-[#0E0F12] text-white p-3.5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4 border-b border-[#1E2027] pb-4 sm:pb-5">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white font-serif-title">
            {headerInfo.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-light">
            {headerInfo.subtitle}
          </p>
        </div>

        {/* Counter Badge Pill on Top Right with Fast Mode indicator */}
        <div className="flex items-center gap-2 self-start shrink-0 bg-[#16171C] border border-[#262831] px-3 py-1.5 rounded-full shadow-inner">
          <Zap className="w-3.5 h-3.5 text-[#E5B869] animate-pulse" />
          <span className="text-xs font-bold text-[#E5B869]">{models.length} arquivos</span>
          <span className="text-slate-500 text-xs hidden sm:inline">•</span>
          <span className="text-[11px] text-emerald-400 font-semibold hidden sm:inline">Modo Turbo 60FPS</span>
        </div>
      </div>

      {/* 2. Filter Pills & Sorting Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 sm:gap-3">
        {/* Horizontal Scrollable Pills (Touch optimized for mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          {FILTER_PILLS.map((pill) => {
            const isActive = selectedPill === pill;
            return (
              <button
                key={pill}
                type="button"
                onClick={() => setSelectedPill(pill)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-[#E5B869] text-[#0B0C0E] font-bold shadow-md shadow-[#E5B869]/15'
                    : 'bg-[#16171B] text-slate-300 hover:text-white hover:bg-[#1E2026] border border-[#25272F]'
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>

        {/* Controls: Support Filter & Sort Dropdown */}
        <div className="flex items-center gap-2 self-stretch sm:self-end lg:self-auto shrink-0">
          <div className="flex-1 sm:flex-initial flex items-center bg-[#16171B] border border-[#26282E] rounded-xl px-2.5 py-1.5 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0" />
            <select
              value={supportFilter}
              onChange={(e) => setSupportFilter(e.target.value as any)}
              className="w-full bg-transparent text-slate-300 focus:outline-none cursor-pointer pr-1"
            >
              <option value="all" className="bg-[#16171B] text-white">Todos os Suportes</option>
              <option value="none" className="bg-[#16171B] text-white">Sem Suporte (Print-in-Place)</option>
              <option value="tree" className="bg-[#16171B] text-white">Suportes em Árvore</option>
            </select>
          </div>

          <div className="flex-1 sm:flex-initial flex items-center bg-[#16171B] border border-[#26282E] rounded-xl px-2.5 py-1.5 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-transparent text-slate-300 focus:outline-none cursor-pointer pr-1"
            >
              <option value="recent" className="bg-[#16171B] text-white">Ordem Original</option>
              <option value="downloads" className="bg-[#16171B] text-white">Mais Baixados</option>
              <option value="time" className="bg-[#16171B] text-white">Menor Tempo</option>
              <option value="weight" className="bg-[#16171B] text-white">Menor Peso (g)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Results Summary Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-0.5">
        <span>
          Mostrando <strong className="text-white">{displayedModels.length}</strong> de{' '}
          <strong className="text-slate-200">{filteredModels.length}</strong> modelos natalinos
        </span>
        {searchQuery && (
          <span className="text-[#E5B869] truncate ml-2">
            "{searchQuery}"
          </span>
        )}
      </div>

      {/* 4. Model Cards Grid - 2 columns on mobile, 3 on tablet, 4 on desktop, 5 on large displays */}
      {displayedModels.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {displayedModels.map((model, index) => (
              <ModelCard
                key={model.id}
                model={model}
                isFavorite={favoritesSet.has(model.id)}
                onToggleFavorite={onToggleFavorite}
                onOpenModel={onOpenModel}
                onDirectDownload={onDirectDownload}
                priority={index < 8}
              />
            ))}
          </div>

          {/* Sentinel element for infinite loading */}
          <div ref={sentinelRef} className="h-6 w-full" />

          {/* Optional "Carregar Todos" button if more items exist */}
          {visibleCount < filteredModels.length && (
            <div className="flex flex-col items-center justify-center pt-2 pb-6 gap-2">
              <button
                type="button"
                onClick={() => setVisibleCount(filteredModels.length)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1C1E26] hover:bg-[#252834] active:scale-95 text-[#E5B869] text-xs font-bold rounded-xl border border-[#2D303D] shadow-md transition-all cursor-pointer"
              >
                <span>Mostrar todos os {filteredModels.length} modelos de uma vez</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-500">
                (O rolamento automático carrega conforme você rola a página)
              </span>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-[#141519] border border-[#21232B] rounded-3xl">
          <div className="w-14 h-14 rounded-2xl bg-[#1D1E26] text-[#E5B869] flex items-center justify-center mb-4">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">
            Nenhum modelo natalino encontrado
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mb-5">
            Tente buscar por outro termo como "Árvore", "Papai Noel", "Rena", "Luminária" ou "Cortador".
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedPill('Todos');
              setSupportFilter('all');
            }}
            className="px-4 py-2 bg-[#E5B869] text-[#0B0C0E] text-xs font-bold rounded-xl hover:bg-[#D4A359] transition-all cursor-pointer"
          >
            Limpar Filtros
          </button>
        </div>
      )}
    </div>
  );
};
