import React, { useState, useMemo } from 'react';
import {
  Search,
  Download,
  FolderDown,
  Printer,
  Sparkles,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Check,
  Plus,
  ExternalLink,
} from 'lucide-react';
import { NatalModel } from '../data/models';
import { generateAndDownloadSTL } from '../utils/stlGenerator';

interface AcervoViewProps {
  models: NatalModel[];
  onOpenModel: (model: NatalModel) => void;
  queue: NatalModel[];
  onToggleQueue: (model: NatalModel) => void;
  onOpenQueue: () => void;
}

const CATEGORIES = [
  'Todos',
  'Presépios',
  'Enfeites de Árvore',
  'Luminárias',
  'Personagens',
  'Guirlandas',
  'Mesa Posta',
  'Cortadores & Miniaturas',
] as const;

export const AcervoView: React.FC<AcervoViewProps> = ({
  models,
  onOpenModel,
  queue,
  onToggleQueue,
  onOpenQueue,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<'number' | 'time' | 'weight' | 'profit' | 'price'>('number');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const queueIds = useMemo(() => new Set(queue.map((m) => m.id)), [queue]);

  const filteredModels = useMemo(() => {
    return models
      .filter((m) => {
        const matchesCategory =
          selectedCategory === 'Todos' || m.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.filamentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          String(m.number).includes(searchQuery);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'number') return a.number - b.number;
        if (sortBy === 'time')
          return a.printTimeHours * 60 + a.printTimeMinutes - (b.printTimeHours * 60 + b.printTimeMinutes);
        if (sortBy === 'weight') return a.weightG - b.weightG;
        if (sortBy === 'profit')
          return b.suggestedSalePrice - b.costEstimate - (a.suggestedSalePrice - a.costEstimate);
        if (sortBy === 'price') return a.suggestedSalePrice - b.suggestedSalePrice;
        return 0;
      });
  }, [models, selectedCategory, searchQuery, sortBy]);

  const handleDownloadSingle = (e: React.MouseEvent, model: NatalModel) => {
    e.stopPropagation();
    setDownloadingId(model.id);
    generateAndDownloadSTL(model.title, model.category);
    setTimeout(() => {
      setDownloadingId(null);
    }, 1500);
  };

  const handleToggleQueueClick = (e: React.MouseEvent, model: NatalModel) => {
    e.stopPropagation();
    onToggleQueue(model);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-[#03150E] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#062419] border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>100 ARQUIVOS STL EXCLUSIVOS DE NATAL</span>
          </div>
          <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
            Catálogo Completo de Modelos 3D
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Todos os 100 modelos natalinos testados, calibrados e prontos para fatiar no Cura, Bambu Studio ou OrcaSlicer. Clique em qualquer modelo para abrir o visualizador 3D e baixar o arquivo .STL.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://drive.google.com/drive/folders/1-natal-stl-viral-oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#062419] hover:bg-[#0A3323] text-emerald-300 font-bold text-xs py-2.5 px-4 rounded-xl border border-emerald-500/40 transition-colors"
          >
            <FolderDown className="w-4 h-4 text-emerald-400" />
            <span>Drive com Renders em 4K</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <button
            type="button"
            onClick={onOpenQueue}
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Fila de Farm ({queue.length})</span>
          </button>
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-[#03150E] border border-emerald-900/60 rounded-2xl p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nome, número (#01 a #100), categoria ou filamento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#020B07] border border-emerald-900/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#020B07] border border-emerald-900/80 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="number">Ordem Original (#01 a #100)</option>
              <option value="time">Menor Tempo de Impressão</option>
              <option value="weight">Menor Peso (Mais Econômico)</option>
              <option value="profit">Maior Lucro Líquido</option>
              <option value="price">Menor Preço de Venda</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#020B07] border border-emerald-900/80 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-400 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Visualização em Grade"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-amber-400 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Visualização em Lista"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === 'Todos'
                ? models.length
                : models.filter((m) => m.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-[#020B07] text-slate-300 hover:text-white hover:bg-[#062419] border border-emerald-950'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-emerald-950 text-emerald-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header Info */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Exibindo <strong className="text-white">{filteredModels.length}</strong> de 100 modelos
        </span>
        {searchQuery && (
          <span>
            Filtrando por: &quot;<strong className="text-amber-400">{searchQuery}</strong>&quot;
          </span>
        )}
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredModels.map((item) => {
            const inQueue = queueIds.has(item.id);
            const isDownloading = downloadingId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onOpenModel(item)}
                className="group bg-[#041710] border border-emerald-900/60 hover:border-amber-400/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="aspect-[3/4] w-full bg-[#020B07] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Badges */}
                  <span className="absolute top-2 left-2 bg-[#020B07]/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                    #{String(item.number).padStart(2, '0')}
                  </span>

                  {item.bestSeller && (
                    <span className="absolute top-2 right-2 bg-red-950/90 text-red-300 text-[9px] font-black px-1.5 py-0.5 rounded border border-red-500/40 uppercase">
                      HOT
                    </span>
                  )}

                  {/* Suggested Price on Image */}
                  <span className="absolute bottom-2 right-2 bg-black/80 text-emerald-300 text-[11px] font-bold font-mono px-2 py-0.5 rounded-lg border border-emerald-500/30">
                    R$ {item.suggestedSalePrice.toFixed(0)}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col flex-1 justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-amber-400/80 font-medium block truncate mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-xs font-bold text-white line-clamp-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Weight & Time */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-emerald-950 font-mono">
                    <span>~{item.weightG}g</span>
                    <span className="text-emerald-400 font-semibold">
                      {item.printTimeHours}h {item.printTimeMinutes}m
                    </span>
                  </div>

                  {/* Quick Action Buttons on Card */}
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={(e) => handleDownloadSingle(e, item)}
                      className="flex items-center justify-center gap-1 bg-[#062419] hover:bg-emerald-600 text-emerald-300 hover:text-white py-1.5 px-2 rounded-lg text-[10px] font-bold border border-emerald-500/30 transition-colors cursor-pointer"
                      title="Baixar Arquivo STL"
                    >
                      <Download className={`w-3 h-3 ${isDownloading ? 'animate-bounce' : ''}`} />
                      <span>STL</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleToggleQueueClick(e, item)}
                      className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                        inQueue
                          ? 'bg-amber-400 text-slate-950 border border-amber-300'
                          : 'bg-[#020B07] hover:bg-[#062419] text-slate-300 hover:text-white border border-emerald-950'
                      }`}
                      title={inQueue ? 'Remover da Fila' : 'Adicionar à Fila de Impressão'}
                    >
                      {inQueue ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Fila</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Fila</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* List / Table View */
        <div className="bg-[#03150E] border border-emerald-900/60 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#020B07] border-b border-emerald-950 text-slate-400 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Modelo</th>
                  <th className="py-3 px-4">Categoria</th>
                  <th className="py-3 px-4">Peso</th>
                  <th className="py-3 px-4">Tempo</th>
                  <th className="py-3 px-4">Filamento Indicado</th>
                  <th className="py-3 px-4 text-right">Venda Sugerida</th>
                  <th className="py-3 px-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-950 text-slate-200">
                {filteredModels.map((item) => {
                  const inQueue = queueIds.has(item.id);
                  return (
                    <tr
                      key={item.id}
                      onClick={() => onOpenModel(item)}
                      className="hover:bg-[#051C15]/70 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-amber-400">
                        #{String(item.number).padStart(2, '0')}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-lg object-cover bg-slate-900 shrink-0"
                          />
                          <div>
                            <span className="font-bold text-white block hover:text-amber-300">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-400 line-clamp-1">
                              {item.description}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-amber-300">{item.category}</td>
                      <td className="py-3 px-4 font-mono">~{item.weightG}g</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">
                        {item.printTimeHours}h {item.printTimeMinutes}m
                      </td>
                      <td className="py-3 px-4 text-slate-300">{item.filamentType}</td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-amber-400">
                        R$ {item.suggestedSalePrice.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => handleDownloadSingle(e, item)}
                            className="p-1.5 rounded-lg bg-[#062419] hover:bg-emerald-600 text-emerald-300 hover:text-white transition-colors cursor-pointer"
                            title="Baixar STL"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleToggleQueueClick(e, item)}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                              inQueue
                                ? 'bg-amber-400 text-slate-950 font-bold'
                                : 'bg-[#020B07] hover:bg-[#062419] text-slate-300'
                            }`}
                            title="Adicionar à Fila de Impressão"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
