import React from 'react';
import {
  X,
  Sparkles,
  Film,
  BookOpen,
  FolderDown,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface BonusPlanosModalProps {
  onClose: () => void;
}

export const BonusPlanosModal: React.FC<BonusPlanosModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#141519] border border-[#26282E] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#21232B] bg-[#0E0F12]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D4A359] text-[#0B0C0E] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-title text-base sm:text-lg font-bold text-white">
                Planos, Bônus & Vantagens VIP
              </h3>
              <p className="text-xs text-[#9496A1]">
                Acesso Vitalício Completo Liberado para o Pack Natalino
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-[#1C1E24] hover:bg-[#252830] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-[#2B2E37] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300">
          {/* Status banner */}
          <div className="bg-[#1C1E24] border border-[#D4A359]/40 rounded-2xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#D4A359] font-bold uppercase tracking-wider block">
                  STATUS DA ASSINATURA
                </span>
                <span className="text-sm font-bold text-white">
                  Membro Vitalício VIP Ativo (Pack Natalino)
                </span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full shrink-0">
              Acesso Ilimitado
            </span>
          </div>

          {/* Bonus List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#181920] border border-[#262831] p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <FolderDown className="w-4 h-4 text-[#D4A359]" />
                <span>100 Modelos Natalinos no Google Drive</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Todos os arquivos STL, 3MF e fotos originais organizados em pastas individuais prontas para download.
              </p>
              <a
                href="https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E5B869] font-bold hover:underline pt-1 cursor-pointer"
              >
                <span>Acessar Pasta Oficial no Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-[#181920] border border-[#262831] p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Film className="w-4 h-4 text-[#D4A359]" />
                <span>Roteiros & Vídeos de Vendas</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Scripts validados para Instagram Reels, TikTok e WhatsApp para faturar até 5x mais nesta época de Natal.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold pt-1">
                <CheckCircle2 className="w-3 h-3" /> Incluso no seu pacote
              </span>
            </div>

            <div className="bg-[#181920] border border-[#262831] p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <BookOpen className="w-4 h-4 text-[#D4A359]" />
                <span>Aulas de Fatiamento & Acabamento</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Aprenda a calibrar suportes em árvore, filamento Silk Dourado, acabamento com verniz e pintura manual.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold pt-1">
                <CheckCircle2 className="w-3 h-3" /> Módulo liberado
              </span>
            </div>

            <div className="bg-[#181920] border border-[#262831] p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Sparkles className="w-4 h-4 text-[#D4A359]" />
                <span>Direito de Venda Comercial</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Você tem licença comercial vitalícia para imprimir e vender fisicamente todos os 100 modelos.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold pt-1">
                <CheckCircle2 className="w-3 h-3" /> Licença Comercial Ativa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
