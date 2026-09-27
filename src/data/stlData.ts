export const FAQS = [
  {
    q: 'Posso vender as peças impressas fisicamente?',
    a: 'SIM! O Pack Natalino concede a você licença comercial vitalícia irrestrita para imprimir e vender quantas peças físicas quiser, seja na sua cidade, no Mercado Livre, Shopee, Instagram ou para lojistas. É proibido apenas revender o arquivo digital STL.',
  },
  {
    q: 'Consigo imprimir em qualquer impressora 3D de filamento (FDM) ou resina (SLA)?',
    a: 'Sim! Todos os modelos foram selecionados e testados para máxima compatibilidade. Podem ser fatiados em Bambu Studio, OrcaSlicer, Cura, PrusaSlicer, Creality Print e Lychee/Chitubox para resina.',
  },
  {
    q: 'Como baixar os arquivos STL e 3MF?',
    a: 'Você pode baixar diretamente com um clique no botão de download de cada modelo ou acessar a pasta oficial completa no Google Drive com todos os arquivos organizados.',
  },
  {
    q: 'Os modelos da Coleção Católica possuem arquivos STL e 3MF separados?',
    a: 'Sim! Cada modelo católico conta com seu arquivo STL direto para qualquer fatiador, seu projeto 3MF com configurações de cor/placa para Bambu e OrcaSlicer, e o link oficial da pasta no Google Drive.',
  },
];

export const SLICER_PROFILES = [
  {
    name: 'Bambu Studio / OrcaSlicer (Multi-Color & Padrão)',
    desc: 'Arquivos .3mf já abrem com configurações de filamento e pintura salvas.',
    recommended: 'Camada de 0.16mm ou 0.20mm, Giroide 15%',
  },
  {
    name: 'Ultimaker Cura / Creality Print',
    desc: 'Abra diretamente os arquivos .stl convertidos.',
    recommended: 'Parede de 1.2mm (3 perímetros), Giroide 15%, Suporte Árvore',
  },
  {
    name: 'PrusaSlicer',
    desc: 'Compatível com .stl e projetos .3mf universais.',
    recommended: 'Altura de camada 0.15mm ou 0.20mm estrutural',
  },
];
