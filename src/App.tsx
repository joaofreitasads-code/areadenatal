import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  FolderDown, 
  HelpCircle, 
  Filter, 
  CheckCircle2, 
  Star, 
  ChevronRight 
} from 'lucide-react';
import { christmasCatalog } from './data/driveStlData';
import { ModelCard } from './components/ModelCard';
import { ModelDetailModal } from './components/ModelDetailModal';
import { FAQS, SLICER_PROFILES } from './data/stlData';
import { StlItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'catalog' | 'guides'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedModel, setSelectedModel] = useState<StlItem | null>(null);

  // Dynamic counts for Christmas categories
  const categoriesWithCount = useMemo(() => {
    const counts: Record<string, number> = { 'Todos': christmasCatalog.length };
    christmasCatalog.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return [
      'Todos',
      'Árvores de Natal',
      'Papai Noel & Personagens',
      'Renas & Animais',
      'Bolas & Enfeites de Árvore',
      'Luminárias & Velas LED',
      'Cortadores de Biscoito',
      'Chaveiros & Lembrancinhas',
      'Geek & Cultura Pop Natalina',
      'Decorações Natalinas'
    ].map(cat => ({ name: cat, count: counts[cat] || 0 }));
  }, []);

  // Filtered models
  const filteredModels = useMemo(() => {
    return christmasCatalog.filter(item => {
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.folderName && item.folderName.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col bg-gradient-to-b from-[#5c0a0a] via-[#480707] to-[#270303] selection:bg-[#00ff66] selection:text-slate-950">
      {/* Top Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b shadow-2xl bg-[#480808]/95 border-red-700/80 shadow-red-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo & Platform Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl p-0.5 shadow-lg flex items-center justify-center bg-gradient-to-br from-red-500 via-amber-400 to-red-700 shadow-red-500/30">
              <span className="text-2xl">🎅</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-cinzel font-extrabold text-base sm:text-xl text-white tracking-wide">
                  Pack Natalino 3D™
                </h1>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 100 Modelos
                </span>
              </div>
              <p className="text-[11px] text-slate-300 hidden sm:block">
                Área de Membros Oficial • Catálogo Completo com Acesso Direto ao Google Drive
              </p>
            </div>
          </div>

          {/* Header Action Tabs */}
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'catalog'
                  ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-600/50 border-2 border-amber-300'
                  : 'text-slate-300 hover:text-white hover:bg-red-950/60 border border-transparent'
              }`}
            >
              <span>🎅</span>
              <span>Modelos ({christmasCatalog.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('guides')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'guides'
                  ? 'bg-slate-800 text-white shadow-md border border-slate-700'
                  : 'text-slate-300 hover:text-white hover:bg-black/30 border border-transparent'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">Dicas & Fatiamento</span>
              <span className="sm:hidden">Dicas</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {activeTab === 'guides' ? (
          /* Slicing Guides & FAQ */
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-red-700 flex items-center justify-between shadow-xl">
              <div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
                  Guia de Impressão, Fatiamento & Rentabilidade
                </h2>
                <p className="text-slate-300 text-sm max-w-2xl">
                  Recomendações técnicas para obter peças perfeitas com menor tempo de máquina e máximo aproveitamento de filamento.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('catalog')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs"
              >
                Voltar aos Modelos
              </button>
            </div>

            {/* Slicer Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SLICER_PROFILES.map((profile, idx) => (
                <div key={idx} className="bg-[#3e0808]/80 p-5 rounded-2xl border border-red-800 space-y-3 shadow-lg">
                  <h3 className="font-bold text-amber-300 text-base">{profile.name}</h3>
                  <p className="text-xs text-red-100/90">{profile.desc}</p>
                  <div className="p-3 bg-black/60 rounded-xl text-[11px] text-slate-300 border border-red-900">
                    <strong className="text-white block mb-1">Configuração:</strong>
                    {profile.recommended}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="bg-[#3b0707]/70 p-6 rounded-3xl border border-red-800 space-y-4">
              <h3 className="font-cinzel text-xl font-bold text-white mb-4">Perguntas Frequentes & Licença Comercial</h3>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/50 border border-red-900/80">
                    <h4 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-amber-400" />
                      {faq.q}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Main Christmas Catalog */
          <div className="space-y-6">
            {/* Christmas Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#7a0f0f] via-[#5c0b0b] to-[#3a0606] border-2 border-red-500/80 p-6 sm:p-7 shadow-2xl">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 text-amber-300 border border-amber-400/40 text-xs font-black">
                    <span>🎅</span>
                    <span>Pack Natalino Oficial • 100 Modelos Exclusivos</span>
                  </div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Catálogo Completo do Pack Natalino
                  </h2>
                  <p className="text-xs sm:text-sm text-red-100/90 font-light leading-relaxed">
                    Navegue pelos 100 modelos de Natal com fotos oficiais e acesse os arquivos diretamente no Google Drive clicando no botão verde neon em cada card.
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <a
                    href="https://drive.google.com/drive/folders/1w77xX81VdZq_2bYg8p_5P5Z-bN-1u9O_?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#00ff66] hover:bg-[#25ff79] text-slate-950 font-black text-xs sm:text-sm py-3 px-5 rounded-2xl shadow-[0_0_25px_rgba(0,255,102,0.8)] border-2 border-white/80 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <FolderDown className="w-4 h-4 text-slate-950 stroke-[3]" />
                    <span>ABRIR PASTA GERAL NO DRIVE</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SEARCH AND CATEGORY FILTERS */}
            <div className="space-y-3.5 p-4 rounded-2xl border bg-[#400707]/85 border-2 border-red-700 shadow-xl shadow-red-950/40">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-red-300" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar nos 100 modelos natalinos (Árvore, Papai Noel, Rena, Enfeite, Cortador, Relógio...)"
                    className="w-full pl-11 pr-4 py-3 rounded-xl text-sm transition-colors focus:outline-none bg-[#260404] border border-red-600 text-white placeholder-red-200/50 focus:border-[#00ff66]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs px-2 py-0.5 rounded text-white hover:bg-red-800 bg-red-900"
                    >
                      Limpar
                    </button>
                  )}
                </div>

                <div className="text-xs flex items-center justify-between sm:justify-end gap-2 px-1 text-amber-200">
                  <span>
                    Exibindo <strong>{filteredModels.length}</strong> de {christmasCatalog.length} modelos natalinos
                  </span>
                </div>
              </div>

              {/* Dynamic Category Pills with Count Badges */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <Filter className="w-3.5 h-3.5 shrink-0 ml-1 mr-0.5 text-amber-300" />
                {categoriesWithCount.map(({ name, count }) => {
                  const isSelected = selectedCategory === name;
                  return (
                    <button
                      key={name}
                      onClick={() => setSelectedCategory(name)}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#00ff66] text-slate-950 font-black shadow-[0_0_15px_rgba(0,255,102,0.7)]'
                          : 'bg-[#290404] text-red-200 hover:text-white hover:bg-red-900 border border-red-800'
                      }`}
                    >
                      <span>{name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? 'bg-slate-950 text-[#00ff66]'
                          : 'bg-red-950 text-red-300'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MODELS GRID */}
            {filteredModels.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredModels.map((item, index) => (
                  <ModelCard
                    key={item.id}
                    item={item}
                    priority={index < 6}
                    onOpenDetails={(m) => setSelectedModel(m)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center space-y-3 rounded-3xl border bg-[#400707]/60 border-red-700">
                <Search className="w-8 h-8 mx-auto text-red-300" />
                <h3 className="font-cinzel text-lg font-bold text-white">
                  Nenhum modelo encontrado
                </h3>
                <p className="text-xs max-w-sm mx-auto text-red-200">
                  Não encontramos nenhum item correspondente a "{searchQuery}" nesta categoria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Todos');
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold transition-colors bg-[#00ff66] text-slate-950 font-black shadow-[0_0_15px_rgba(0,255,102,0.8)]"
                >
                  Ver Todos os 100 Modelos
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Model Detail Modal */}
      <ModelDetailModal
        item={selectedModel}
        onClose={() => setSelectedModel(null)}
      />

      {/* Footer */}
      <footer className="mt-auto border-t py-8 text-center text-xs transition-colors border-red-800/80 bg-[#290303] text-red-200/70">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-cinzel font-bold text-amber-300">
            Pack Natalino 3D™ • 100 Modelos Exclusivos com Licença Comercial Liberada
          </p>
          <p className="text-[11px] text-red-300/60">
            Acesso vitalício com download direto no Google Drive para fatiamento e impressão 3D.
          </p>
        </div>
      </footer>
    </div>
  );
}
