import React, { useState } from 'react';
import {
  Sparkles,
  Download,
  FolderDown,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Package,
} from 'lucide-react';
import { SACRED_ART_BONUS, SacredArtModel } from '../data/models';
import { generateAndDownloadSTL } from '../utils/stlGenerator';

export const BonusSacroView: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownloadSacred = (item: SacredArtModel) => {
    setDownloadingId(item.id);
    generateAndDownloadSTL(item.title, 'Sacro');
    setTimeout(() => setDownloadingId(null), 1500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Super Bonus Header */}
      <div
        className="relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{
          background:
            'radial-gradient(at 15% 20%, rgba(217, 119, 6, 0.25) 0%, rgba(6, 36, 25, 0.98) 60%, rgb(2, 14, 9) 100%)',
        }}
      >
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#062419] border border-amber-400/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>SUPER BÔNUS EXCLUSIVO LIBERADO (+500 ARQUIVOS STL)</span>
          </div>

          <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
            Mega Coleção de <span className="text-amber-400">Artes Sacras & Devoção</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            O nicho católico e religioso é um dos mercados com maior ticket médio e fidelidade da impressão 3D no Brasil. Este acervo bônus contém estátuas em altíssima definição de Nossa Senhora, Santos, Arcanjos e Crucifixos prontos para fatiar e vender o ano inteiro!
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/drive/folders/1-natal-stl-viral-oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg border border-amber-300/40 transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
            >
              <FolderDown className="w-4 h-4" />
              <span>Acessar Pasta Completa (+500 STL) no Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Bonus Features 3-Col Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#041911] border border-emerald-900/60 rounded-2xl p-5 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-sm font-bold text-white">Riqueza Escultural Barroca</h3>
          <p className="text-xs text-slate-300">
            Drapeados de túnica, fisionomias serenas e detalhes fiéis à tradição da arte sacra clássica.
          </p>
        </div>

        <div className="bg-[#041911] border border-emerald-900/60 rounded-2xl p-5 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Package className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-sm font-bold text-white">Vendas o Ano Todo</h3>
          <p className="text-xs text-slate-300">
            Não dependa apenas do Natal: batizados, primeiras comunhões, casamentos e devoções mantêm sua farm ativa em todos os meses.
          </p>
        </div>

        <div className="bg-[#041911] border border-emerald-900/60 rounded-2xl p-5 space-y-2">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-cinzel text-sm font-bold text-white">Base Sólida sem Suporte Complexo</h3>
          <p className="text-xs text-slate-300">
            Geometrias revisadas para aderência perfeita à mesa e suportes tipo árvore fáceis de destacar.
          </p>
        </div>
      </div>

      {/* Destaques da Coleção Sacra */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
              Principais Modelos Sacros em Destaque
            </h2>
            <p className="text-xs text-slate-400">
              Clique em &quot;Baixar STL&quot; para download direto do arquivo de cada peça.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SACRED_ART_BONUS.map((item) => {
            const isDownloading = downloadingId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#051C15] border border-emerald-900/60 hover:border-amber-400/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full bg-[#020B07] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-[#020B07]/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                    {item.category}
                  </span>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-emerald-300 text-[11px] font-bold font-mono px-2 py-0.5 rounded-lg border border-emerald-500/30">
                    Venda: R$ {item.suggestedSalePrice.toFixed(0)}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3 className="font-cinzel text-sm font-bold text-white mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-emerald-950 font-mono">
                    <span>~{item.weightG}g PLA</span>
                    <span className="text-emerald-400 font-semibold">{item.printTimeHours}h print</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownloadSacred(item)}
                    className="w-full flex items-center justify-center gap-2 bg-[#062419] hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-bold py-2.5 px-3 rounded-xl border border-emerald-500/30 transition-colors cursor-pointer active:scale-95"
                  >
                    <Download className={`w-3.5 h-3.5 ${isDownloading ? 'animate-bounce' : ''}`} />
                    <span>Baixar Arquivo STL</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
