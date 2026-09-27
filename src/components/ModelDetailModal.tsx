import React, { useState } from 'react';
import {
  X,
  Download,
  FolderDown,
  Layers,
  Clock,
  Weight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Copy,
  Plus,
  Check,
  Eye,
  Box,
  ExternalLink,
  FileCode,
  Archive,
  Image as ImageIcon,
} from 'lucide-react';
import { ChristmasModel } from '../data/driveModels';
import { ThreeModelViewer } from './ThreeModelViewer';
import { getHighResImage, getOptimizedThumb } from '../utils/imageOptimizer';

interface ModelDetailModalProps {
  model: ChristmasModel | null;
  onClose: () => void;
  isInQueue: boolean;
  onToggleQueue: (model: ChristmasModel) => void;
}

export const ModelDetailModal: React.FC<ModelDetailModalProps> = ({
  model,
  onClose,
  isInQueue,
  onToggleQueue,
}) => {
  const [activeTab, setActiveTab] = useState<'3d' | 'image'>('image');
  const [copiedProfile, setCopiedProfile] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!model) return null;

  // Commercial estimation
  const costFilamentKg = 90; // R$ 90/kg
  const filamentCost = (model.specs.weightGrams / 1000) * costFilamentKg;
  const machineHourCost = 3.5; // R$ 3,50/hora
  const productionCost = Math.round(filamentCost + model.specs.printTimeHours * machineHourCost);
  const suggestedSalePrice = Math.max(35, Math.round(productionCost * 3.5));
  const profitAmount = suggestedSalePrice - productionCost;
  const profitMarginPercent = Math.round((profitAmount / productionCost) * 100);

  const handleCopyProfile = () => {
    const profileText = `[PERFIL DE FATIAMENTO RECOMENDADO - ${model.title}]
• Modelo: ${model.folderName} (#${String(model.number).padStart(2, '0')})
• Categoria: ${model.categoryLabel}
• Altura de Camada: ${model.specs.layerHeight}
• Preenchimento: ${model.specs.infill}
• Tipo de Suporte: ${model.specs.supports}
• Bico Recomendado: ${model.specs.nozzle}
• Filamento Indicado: ${model.specs.filament}
• Tempo Estimado: ~${model.specs.printTimeHours} horas
• Peso Estimado: ~${model.specs.weightGrams}g
• Link do Drive: ${model.driveFolderUrl}`;

    navigator.clipboard.writeText(profileText);
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 2500);
  };

  const imagesList = model.additionalImages.length > 0 ? model.additionalImages : [model.imageUrl];
  const currentImage = imagesList[selectedImageIndex] || model.imageUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#141519] border border-[#26282E] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#21232B] bg-[#0E0F12]">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#D4A359] text-[#0B0C0E] flex items-center justify-center font-black text-xs">
              #{String(model.number).padStart(2, '0')}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#D4A359] uppercase tracking-wider">
                  {model.categoryLabel}
                </span>
                {model.isNew && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                    Novo Modelo
                  </span>
                )}
              </div>
              <h3 className="font-serif-title text-base sm:text-lg font-bold text-white line-clamp-1">
                {model.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-[#1C1E24] hover:bg-[#252830] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-[#2B2E37] cursor-pointer"
            aria-label="Fechar Detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable Area */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
          {/* Top Section: Visualizer & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Visualizer Container (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="relative aspect-[4/3] w-full bg-[#0D0E11] rounded-2xl overflow-hidden border border-[#26282E] shadow-inner">
                {activeTab === 'image' ? (
                  <div className="w-full h-full relative group flex items-center justify-center bg-[#090A0C]">
                    <img
                      src={getHighResImage(currentImage)}
                      alt={model.title}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-contain p-2"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] text-slate-300 border border-white/10 flex items-center gap-1.5">
                      <ImageIcon className="w-3 h-3 text-[#D4A359]" />
                      <span>Foto Real do Modelo</span>
                    </div>
                  </div>
                ) : (
                  <ThreeModelViewer
                    modelTitle={model.title}
                    category={model.category}
                  />
                )}

                {/* Tab Switcher on top right */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#121316]/90 backdrop-blur-md p-1 rounded-xl border border-white/10 z-10">
                  <button
                    type="button"
                    onClick={() => setActiveTab('image')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'image'
                        ? 'bg-[#D4A359] text-[#0B0C0E] shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Foto</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('3d')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === '3d'
                        ? 'bg-[#D4A359] text-[#0B0C0E] shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>3D Interativo</span>
                  </button>
                </div>
              </div>

              {/* Multiple photos thumbnail list if available */}
              {imagesList.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {imagesList.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setSelectedImageIndex(i);
                        setActiveTab('image');
                      }}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        selectedImageIndex === i && activeTab === 'image'
                          ? 'border-[#D4A359] scale-105'
                          : 'border-[#26282E] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={getOptimizedThumb(img, 240)}
                        alt=""
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions & Commercial Viability (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="bg-[#1A1B22] border border-[#262831] rounded-2xl p-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Nome da Pasta Oficial
                  </span>
                  <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                    <span>{model.folderName}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {model.description}
                  </p>
                </div>

                {/* Commercial Calculator */}
                <div className="bg-gradient-to-br from-[#181920] to-[#14151B] border border-[#282A33] rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-[#D4A359]" />
                      Potencial Comercial de Venda
                    </span>
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      +{profitMarginPercent}% Margem
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center pt-1">
                    <div className="bg-[#0E0F12] p-2.5 rounded-xl border border-[#22242B]">
                      <span className="text-[10px] text-slate-400 block">Custo Estimado</span>
                      <strong className="text-sm text-slate-200">
                        R$ {productionCost.toFixed(2)}
                      </strong>
                    </div>
                    <div className="bg-[#0E0F12] p-2.5 rounded-xl border border-[#D4A359]/30">
                      <span className="text-[10px] text-[#D4A359] block font-semibold">Preço Sugerido</span>
                      <strong className="text-sm text-[#E5B869] font-bold">
                        R$ {suggestedSalePrice.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* Big Button: Abrir Pasta no Google Drive */}
                <a
                  href={model.driveFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#D4A359] hover:bg-[#E5B869] active:scale-[0.98] text-[#0B0C0E] font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  <FolderDown className="w-4 h-4" />
                  <span>Abrir Pasta Completa no Google Drive</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>

                {/* Toggle Fila de Impressão */}
                <button
                  type="button"
                  onClick={() => onToggleQueue(model)}
                  className={`w-full flex items-center justify-center gap-2 text-xs py-2.5 px-3 rounded-xl border font-bold transition-all cursor-pointer ${
                    isInQueue
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-[#1E2028] hover:bg-[#252832] text-slate-300 border-[#2D303C]'
                  }`}
                >
                  {isInQueue ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Item na Fila de Impressão</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Adicionar à Fila de Impressão</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Individual STL / ZIP Files List for Direct Download */}
          <div className="bg-[#101115] border border-[#21232B] rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E2027]">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#D4A359]" />
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  Arquivos 3D Disponíveis Nesta Pasta ({model.files.length})
                </h4>
              </div>
              <span className="text-[11px] text-slate-400">
                Downloads diretos do Google Drive
              </span>
            </div>

            {model.files.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {model.files.map((file) => {
                  const isZip = file.name.toLowerCase().endsWith('.zip') || file.name.toLowerCase().endsWith('.rar');
                  return (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#17181F] hover:bg-[#1E2028] border border-[#262832] transition-colors gap-2"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isZip ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                          {isZip ? <Archive className="w-4 h-4" /> : <Box className="w-4 h-4" />}
                        </div>
                        <div className="truncate">
                          <span className="text-xs font-semibold text-white truncate block">
                            {file.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {isZip ? 'Arquivo Compactado' : 'Arquivo STL'}
                          </span>
                        </div>
                      </div>

                      <a
                        href={file.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#D4A359] hover:bg-[#E5B869] text-[#0B0C0E] font-bold text-xs rounded-lg transition-colors shrink-0 shadow-sm cursor-pointer"
                        title="Baixar arquivo agora"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-slate-400">
                Os arquivos estão organizados na pasta oficial do Google Drive.
                <a
                  href={model.driveFolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-[#E5B869] font-bold hover:underline"
                >
                  Clique aqui para acessar e baixar os arquivos da pasta ↗
                </a>
              </div>
            )}
          </div>

          {/* Slicer Settings & Specifications Grid */}
          <div className="bg-[#101115] border border-[#21232B] rounded-2xl p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#1E2027]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#D4A359]" />
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  Configuração Recomendada de Fatiamento (Cura / Bambu / Prusa)
                </h4>
              </div>

              <button
                type="button"
                onClick={handleCopyProfile}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#D4A359] bg-[#1C1E26] hover:bg-[#252834] px-3 py-1 rounded-lg border border-[#2D303D] transition-colors cursor-pointer"
              >
                {copiedProfile ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Perfil Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Parâmetros</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#17181F] p-3 rounded-xl border border-[#252731]">
                <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
                  <Weight className="w-3 h-3 text-[#D4A359]" /> Peso Estimado
                </div>
                <div className="font-bold text-white font-mono text-sm">
                  ~{model.specs.weightGrams} gramas
                </div>
              </div>

              <div className="bg-[#17181F] p-3 rounded-xl border border-[#252731]">
                <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#D4A359]" /> Tempo de Impressão
                </div>
                <div className="font-bold text-white font-mono text-sm">
                  ~{model.specs.printTimeHours}h
                </div>
              </div>

              <div className="bg-[#17181F] p-3 rounded-xl border border-[#252731]">
                <div className="text-[10px] text-slate-400 mb-1">Altura de Camada</div>
                <div className="font-bold text-white">{model.specs.layerHeight}</div>
              </div>

              <div className="bg-[#17181F] p-3 rounded-xl border border-[#252731]">
                <div className="text-[10px] text-slate-400 mb-1">Preenchimento (Infill)</div>
                <div className="font-bold text-white">{model.specs.infill}</div>
              </div>

              <div className="bg-[#17181F] p-3 rounded-xl border border-[#252731]">
                <div className="text-[10px] text-slate-400 mb-1">Suportes</div>
                <div className="font-bold text-white truncate">{model.specs.supports}</div>
              </div>

              <div className="bg-[#17181F] p-3 rounded-xl border border-[#252731]">
                <div className="text-[10px] text-slate-400 mb-1">Bico Recomendado</div>
                <div className="font-bold text-white">{model.specs.nozzle}</div>
              </div>

              <div className="col-span-2 bg-[#17181F] p-3 rounded-xl border border-[#252731]">
                <div className="text-[10px] text-slate-400 mb-1">Filamento Recomendado</div>
                <div className="font-bold text-[#E5B869] truncate">
                  {model.specs.filament}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
