import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Sliders,
  CheckCircle2,
  FolderDown,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const CHRISTMAS_TUTORIALS = [
  {
    id: 'tree-supports',
    title: 'Suportes em Árvore (Tree Supports) que Soltam com a Mão',
    description: 'Como configurar suportes orgânicos/árvore no Cura, Bambu Studio e OrcaSlicer para estátuas de Papai Noel e Presépios sem deixar marcas na peça.',
    content: `1. No Bambu Studio / OrcaSlicer:
• Tipo de suporte: Tree (Árvore)
• Estilo: Tree Slim ou Tree Organic
• Ângulo do suporte: 30°
• Distância Z do topo: 0.20mm (com camada de 0.16mm) ou 0.22mm (com camada de 0.20mm)
• Camadas de interface: 3 camadas com espaçamento concêntrico

2. No Cura:
• Enable Support: Ativado
• Support Structure: Tree
• Tree Support Branch Angle: 40°
• Support Z Distance: 0.2mm
• Tree Support Trunk Diameter: 2mm

Dica de ouro: Com essa distância Z de 0.20mm, os suportes descolam intactos com os dedos, sem precisar de alicate ou lixa na peça de Natal.`
  },
  {
    id: 'silk-filament',
    title: 'Impressão com Filamento Silk Dourado & Vermelho Metálico',
    description: 'O segredo para fazer o filamento Silk brilhar como ouro polido nas árvores de natal e enfeites sem entupir o bico.',
    content: `1. Temperatura do Bico:
• O filamento Silk precisa de calor extra para liberar o brilho espelhado característico.
• Aumente a temperatura em +5°C a +10°C em relação ao PLA comum (ex: 215°C a 220°C no bico).

2. Velocidade da Parede Externa:
• Imprima a parede externa (Outer Wall) a uma velocidade baixa e constante (40 a 50 mm/s).
• Variações bruscas de velocidade causam manchas opacas no Silk.

3. Refrigeração (Part Cooling):
• Mantenha o ventilador de camada entre 70% e 80% para evitar resfriamento muito rápido que diminui o brilho.`
  },
  {
    id: 'print-in-place',
    title: 'Árvores Retráteis & Articulados (Print-in-Place)',
    description: 'Tolerâncias e fluxo de extrusão para imprimir a "Christmas Tree Collapsible" e kit cards que funcionam direto da mesa.',
    content: `1. Calibração de Fluxo (Flow Rate):
• Se a árvore retrátil colar entre os anéis, seu fluxo está super-extrusando.
• Reduza o fluxo em 2% a 3% (ex: de 100% para 97% ou 98%).

2. Altura de Primeira Camada & Elefante Foot:
• Ative a compensação de pé de elefante (Initial Layer Horizontal Expansion: -0.15mm).
• Isso impede que a base dos anéis solde durante a primeira camada.

3. Ordem das Paredes:
• Defina "Outer Wall First" ou "Paredes Externas Primeiro" para precisão dimensional máxima nos encaixes.`
  },
  {
    id: 'fuzzy-skin',
    title: 'Efeito Pele Difusa (Fuzzy Skin) para Gorros e Barba do Papai Noel',
    description: 'Crie uma textura aveludada realista nas roupas e barbas dos bustos de Papai Noel sem nenhum pós-processamento.',
    content: `1. Ativando o Fuzzy Skin apenas onde importa:
• No Bambu Studio ou Cura, use um modificador de malha (Height Range ou Mesh Modifier) apenas na área da barba e barra do gorro.
• Fuzzy Skin Thickness: 0.2mm
• Fuzzy Skin Point Distance: 0.4mm

2. Resultado:
• A peça sai da impressora com acabamento macio e fosco que parece tecido real, encantando os clientes e aumentando o valor de venda das peças!`
  }
];

export const AulasView: React.FC = () => {
  const [openTutorialId, setOpenTutorialId] = useState<string>('tree-supports');

  const toggleTutorial = (id: string) => {
    setOpenTutorialId(openTutorialId === id ? '' : id);
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-65px)] bg-[#0E0F12] text-white p-4 sm:p-6 lg:p-8 space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-[#141519] border border-[#26282E] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#22242D] border border-[#D4A359]/30 text-[#E5B869] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>MÓDULO TÉCNICO • ENGENHARIA DE IMPRESSÃO 3D</span>
          </div>
          <h1 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-white">
            Aulas Técnicas & Perfis Recomendados
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Os parâmetros exatos para extrair o acabamento mais liso possível da sua impressora 3D, reduzir o tempo de impressão em até 30% e evitar falhas nas noites de produção de Natal.
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#D4A359] hover:bg-[#E5B869] text-[#0B0C0E] font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          <FolderDown className="w-4 h-4" />
          <span>Acessar Modelos no Drive</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>

      {/* Slicer Settings Quick Cheat Sheet */}
      <div className="bg-[#141519] border border-[#26282E] rounded-3xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2 text-[#E5B869] text-xs font-bold uppercase tracking-wider">
          <Sliders className="w-4 h-4 text-[#D4A359]" />
          <span>Tabela Rápida de Configuração Ideal (Cura / Bambu / Orca)</span>
        </div>
        <h3 className="font-serif-title text-lg sm:text-xl font-bold text-white">
          Configuração de Alta Performance para Peças de Natal
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-[#1A1B22] p-4 rounded-2xl border border-[#262831]">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
              Altura de Camada (Layer Height)
            </span>
            <div className="text-base font-bold text-white font-mono">0.16mm</div>
            <p className="text-[11px] text-slate-300 mt-1">
              Equilíbrio perfeito entre velocidade e linhas de camada quase invisíveis.
            </p>
          </div>

          <div className="bg-[#1A1B22] p-4 rounded-2xl border border-[#262831]">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
              Preenchimento (Infill)
            </span>
            <div className="text-base font-bold text-white font-mono">15% Giroide</div>
            <p className="text-[11px] text-slate-300 mt-1">
              O padrão giroide distribui o peso igualmente e não bate o bico nas peças.
            </p>
          </div>

          <div className="bg-[#1A1B22] p-4 rounded-2xl border border-[#262831]">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
              Tipo de Suporte
            </span>
            <div className="text-base font-bold text-[#E5B869] font-mono">Árvore Orgânico</div>
            <p className="text-[11px] text-slate-300 mt-1">
              Economiza 40% de filamento e solta sem esforço ou alicate.
            </p>
          </div>

          <div className="bg-[#1A1B22] p-4 rounded-2xl border border-[#262831]">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
              Bico Recomendado
            </span>
            <div className="text-base font-bold text-white font-mono">0.4mm Padrão</div>
            <p className="text-[11px] text-slate-300 mt-1">
              Ideal para todos os 100 modelos natalinos da biblioteca.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Tutorials */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider px-1">
          Aulas Práticas & Macetes de Fatiamento
        </h3>

        {CHRISTMAS_TUTORIALS.map((tut) => {
          const isOpen = openTutorialId === tut.id;
          return (
            <div
              key={tut.id}
              className="bg-[#141519] border border-[#26282E] rounded-2xl overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleTutorial(tut.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-[#1A1B22] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center font-bold shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {tut.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {tut.description}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 shrink-0 ml-2">
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-[#21232B] bg-[#111215]">
                  <pre className="text-xs text-slate-300 font-sans whitespace-pre-wrap leading-relaxed">
                    {tut.content}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
