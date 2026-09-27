import React, { useState } from 'react';
import {
  CircleHelp,
  MessageCircle,
  Send,
  ChevronDown,
  ChevronUp,
  FolderDown,
  ExternalLink,
} from 'lucide-react';

const FAQS = [
  {
    q: 'Posso vender as peças físicas impressas comercialmente?',
    a: 'SIM! Você tem licença comercial vitalícia para imprimir e vender fisicamente todos os 100 modelos natalinos e os +500 modelos de arte sacra no Mercado Livre, Shopee, Elo7, feiras de artesanato ou encomendas pelo WhatsApp. Apenas a revenda do arquivo digital .STL é restrita.',
  },
  {
    q: 'Como abrir e fatiar os arquivos .STL no meu fatiador?',
    a: 'Basta baixar o arquivo .STL clicando no botão "Baixar STL" aqui no portal ou baixar a pasta completa do Google Drive. Em seguida, arraste o arquivo diretamente para dentro do seu fatiador favorito (Bambu Studio, Cura, OrcaSlicer ou PrusaSlicer). Todos os modelos já vêm na escala correta e orientados para impressão.',
  },
  {
    q: 'Qual é o melhor filamento para lucrar no Natal?',
    a: 'O campeão absoluto de vendas no Natal é o PLA Silk Dourado (Seda Dourada), seguido pelo PLA Branco Neve, Vermelho Carmim e PLA Madeira. Para peças de mesa posta como descansos de prato e cortadores, recomendamos PETG ou PLA alimentício.',
  },
  {
    q: 'Todos os modelos precisam de suportes?',
    a: 'Não! Mais de 65% dos modelos do acervo foram desenhados especificamente para serem impressos sem suporte algum (Flat on Bed). Para os modelos esculturais detalhados (como anjos e estátuas), recomendamos ativar "Suportes em Árvore" (Tree Supports) com distância Z de 0.22mm.',
  },
  {
    q: 'Posso redimensionar (escalar) as peças na impressora?',
    a: 'Sim, você pode alterar a escala livremente no seu fatiador (por exemplo 80%, 120% ou 150%) para se adequar ao tamanho da sua mesa de impressão ou ao pedido específico do seu cliente.',
  },
  {
    q: 'Como funciona o acesso à pasta do Google Drive?',
    a: 'Seu acesso ao Google Drive é vitalício. Lá você encontra os arquivos organizados em pastas individuais com fotos em alta resolução (renders 4K) que você pode usar livremente nos seus anúncios e catálogo de vendas.',
  },
];

export const SuporteView: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#062419] border border-emerald-500/30 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <CircleHelp className="w-3.5 h-3.5 text-amber-400" />
          <span>CANAL DE AJUDA & COMUNIDADE VIP</span>
        </div>
        <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
          Suporte ao Aluno & Perguntas Frequentes
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Tire dúvidas sobre impressoras, fatiamento, filamentos e estratégias de vendas diretamente com nossa equipe e comunidade de alunos.
        </p>
      </div>

      {/* Support Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp VIP */}
        <a
          href="https://api.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#051C15] hover:bg-[#08291F] border border-emerald-900/60 hover:border-emerald-500/60 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group cursor-pointer shadow-lg"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Suporte VIP no WhatsApp
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Atendimento prioritário para tirar dúvidas sobre fatiamento, download de arquivos ou sugestões de modelos.
            </p>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
            <span>Chamar no WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* Telegram Community */}
        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#051C15] hover:bg-[#08291F] border border-emerald-900/60 hover:border-sky-500/60 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group cursor-pointer shadow-lg"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-base font-bold text-white group-hover:text-sky-300 transition-colors">
              Grupo de Networking no Telegram
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Compartilhe fotos de impressões com outros donos de farm 3D, compare fornecedores de filamento e compartilhe clientes.
            </p>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-sky-400 group-hover:text-sky-300">
            <span>Entrar no Grupo VIP</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide text-center">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#041911] border border-emerald-900/60 rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#062419] transition-colors"
                >
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-white">
                    {faq.q}
                  </span>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-emerald-950/80 bg-[#020B07] text-xs text-slate-300 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Cloud Drive Official Reminder Box */}
      <div className="bg-[#03150E] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <h3 className="font-cinzel text-base font-bold text-white">
            Precisa baixar tudo de uma só vez?
          </h3>
          <p className="text-xs text-slate-400">
            Acesse a pasta no Google Drive para fazer download de pastas compactadas em .ZIP com todas as imagens e arquivos.
          </p>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1-natal-stl-viral-oficial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#062419] hover:bg-[#0A3323] text-emerald-300 hover:text-white text-xs font-bold py-3 px-5 rounded-xl border border-emerald-500/40 transition-colors shrink-0"
        >
          <FolderDown className="w-4 h-4 text-emerald-400" />
          <span>Abrir Google Drive</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>
    </div>
  );
};
