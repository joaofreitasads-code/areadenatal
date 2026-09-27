import React from 'react';
import {
  X,
  Printer,
  Trash2,
  Download,
  Clock,
  Weight,
  DollarSign,
  TrendingUp,
  Package,
  FolderDown,
  ExternalLink,
} from 'lucide-react';
import { ChristmasModel } from '../data/driveModels';

interface PrintQueueModalProps {
  queue: ChristmasModel[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onOpenModel: (model: ChristmasModel) => void;
}

export const PrintQueueModal: React.FC<PrintQueueModalProps> = ({
  queue,
  onClose,
  onRemove,
  onClear,
  onOpenModel,
}) => {
  const totalWeightG = queue.reduce((acc, m) => acc + m.specs.weightGrams, 0);
  const totalHours = queue.reduce((acc, m) => acc + m.specs.printTimeHours, 0);
  const costFilamentKg = 90;
  const totalFilamentCost = (totalWeightG / 1000) * costFilamentKg;
  const totalCost = Math.round(totalFilamentCost + totalHours * 3.5);
  const totalRevenue = queue.reduce((acc, m) => {
    const prod = (m.specs.weightGrams / 1000) * 90 + m.specs.printTimeHours * 3.5;
    return acc + Math.max(35, Math.round(prod * 3.5));
  }, 0);
  const totalProfit = totalRevenue - totalCost;
  const spoolsNeeded = Math.ceil(totalWeightG / 1000) || (queue.length > 0 ? 1 : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#141519] border border-[#26282E] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#21232B] bg-[#0E0F12]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D4A359] text-[#0B0C0E] flex items-center justify-center font-black">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-title text-base sm:text-lg font-bold text-white">
                Fila de Impressão Natalina ({queue.length})
              </h3>
              <p className="text-xs text-slate-400">
                Planejamento de produção, filamento e faturamento
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
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
          {queue.length > 0 ? (
            <>
              {/* Summary Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#191A21] border border-[#262832] rounded-2xl p-3.5 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Weight className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>Filamento Total</span>
                  </div>
                  <strong className="text-lg font-bold text-white font-mono">
                    {totalWeightG}g
                  </strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ~{(totalWeightG / 1000).toFixed(2)} kg ({spoolsNeeded} carretel{spoolsNeeded > 1 ? 'éis' : ''})
                  </span>
                </div>

                <div className="bg-[#191A21] border border-[#262832] rounded-2xl p-3.5 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>Tempo Total</span>
                  </div>
                  <strong className="text-lg font-bold text-white font-mono">
                    {totalHours.toFixed(1)}h
                  </strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    ~{(totalHours / 24).toFixed(1)} dias contínuos
                  </span>
                </div>

                <div className="bg-[#191A21] border border-[#262832] rounded-2xl p-3.5 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-slate-300" />
                    <span>Custo Produção</span>
                  </div>
                  <strong className="text-lg font-bold text-slate-200 font-mono">
                    R$ {totalCost.toFixed(2)}
                  </strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Material + Energia
                  </span>
                </div>

                <div className="bg-[#191A21] border border-[#D4A359]/30 rounded-2xl p-3.5 text-center shadow-lg">
                  <div className="flex items-center justify-center gap-1.5 text-[#E5B869] text-xs mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#E5B869]" />
                    <span>Lucro Estimado</span>
                  </div>
                  <strong className="text-lg font-bold text-emerald-400 font-mono">
                    R$ {totalProfit.toFixed(2)}
                  </strong>
                  <span className="text-[10px] text-emerald-400/80 block mt-0.5">
                    Venda: R$ {totalRevenue.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Modelos na fila de impressão</span>
                  <button
                    type="button"
                    onClick={onClear}
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Limpar fila</span>
                  </button>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {queue.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center justify-between p-3 rounded-2xl bg-[#17181F] border border-[#262832] hover:border-[#383B47] transition-all gap-3"
                    >
                      <div
                        onClick={() => onOpenModel(m)}
                        className="flex items-center gap-3 cursor-pointer flex-1 truncate"
                      >
                        <img
                          src={m.imageUrl}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-xl object-cover shrink-0 bg-[#0E0F12]"
                        />
                        <div className="truncate">
                          <h4 className="text-xs font-bold text-white truncate">
                            {m.title}
                          </h4>
                          <span className="text-[11px] text-slate-400 block truncate font-mono">
                            {m.specs.weightGrams}g • ~{m.specs.printTimeHours}h • {m.folderName}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={m.driveFolderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#22242D] hover:bg-[#2C2E3A] text-[#E5B869] rounded-xl transition-colors cursor-pointer"
                          title="Abrir pasta no Drive"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          type="button"
                          onClick={() => onRemove(m.id)}
                          className="p-2 text-slate-400 hover:text-red-400 rounded-xl hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Remover da fila"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Package className="w-12 h-12 text-slate-600 mb-3" />
              <h4 className="text-base font-bold text-white mb-1">
                Fila de impressão vazia
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mb-4">
                Adicione modelos clicando no botão "Adicionar à Fila" dentro dos detalhes de qualquer arquivo STL.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
