import React, { useState } from 'react';
import {
  Film,
  Copy,
  Check,
  FolderDown,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Video,
} from 'lucide-react';
import { VIRAL_COPYS, MarketingCopy } from '../data/models';

export const MarketingView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (copy: MarketingCopy) => {
    navigator.clipboard.writeText(copy.text);
    setCopiedId(copy.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-[#03150E] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#062419] border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Film className="w-3.5 h-3.5 text-red-400" />
            <span>MÁQUINA DE VENDAS DE NATAL</span>
          </div>
          <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
            Copys, Roteiros de Vídeo & Anúncios
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Scripts testados e validados para transformar impressões 3D em pedidos pagos no WhatsApp, Instagram e TikTok. Copie com um clique e personalize com os dados da sua loja.
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/1-natal-stl-viral-oficial"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-xs py-3 px-5 rounded-xl shadow-lg border border-red-400/40 transition-all shrink-0 cursor-pointer active:scale-95"
        >
          <FolderDown className="w-4 h-4" />
          <span>Baixar Pasta de Vídeos Brutos no Drive</span>
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>

      {/* Copys Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {VIRAL_COPYS.map((copy) => {
          const isCopied = copiedId === copy.id;
          return (
            <div
              key={copy.id}
              className="bg-[#041911] border border-emerald-900/60 hover:border-amber-400/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    {copy.channel === 'WhatsApp' ? (
                      <MessageSquare className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Video className="w-3 h-3 text-red-400" />
                    )}
                    <span>{copy.channel}</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{copy.tag}</span>
                </div>

                <h3 className="font-cinzel text-base font-bold text-white mb-3">
                  {copy.title}
                </h3>

                <div className="bg-[#020B07] border border-emerald-950 rounded-xl p-4 text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto selection:bg-amber-400 selection:text-slate-950">
                  {copy.text}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleCopy(copy)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                    isCopied
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-[#062419] hover:bg-[#0A3323] text-amber-300 border border-amber-400/30'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Texto Copiado com Sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{copy.ctaAction}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hashtag Bank & SEO Strategy */}
      <div className="bg-[#03150E] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Banco de Hashtags de Alta Conversão</span>
        </div>
        <h3 className="font-cinzel text-lg font-bold text-white">
          As melhores tags para furar a bolha no Instagram e TikTok
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Copie e cole este bloco no primeiro comentário dos seus vídeos e fotos:
        </p>

        <div className="bg-[#020B07] p-4 rounded-2xl border border-emerald-950 text-xs font-mono text-emerald-400/90 leading-relaxed select-all">
          #impressao3d #impressora3d #natal2026 #decoracaodenatal #presepio #artesacra #presentescriativos #mesaposta #mesapostanatal #feitoamao #compredequemfaz #designexclusivo #ideiasdenatal #lembrancinhadenatal #3dprinting #bambustudio #ender3
        </div>
      </div>
    </div>
  );
};
