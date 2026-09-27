import React, { useState } from 'react';
import { Calculator, DollarSign, Sparkles, TrendingUp, Zap } from 'lucide-react';

export const ProfitCalculator: React.FC = () => {
  const [filamentPrice, setFilamentPrice] = useState<number>(110); // R$/kg
  const [weight, setWeight] = useState<number>(85); // grams
  const [printHours, setPrintHours] = useState<number>(6.25); // hours
  const [energyRate, setEnergyRate] = useState<number>(0.95); // R$/kWh
  const [printerWatts, setPrinterWatts] = useState<number>(120); // avg Watts during print
  const [desiredMarkup, setDesiredMarkup] = useState<number>(600); // 600% markup

  // Calculations
  const filamentCost = (weight / 1000) * filamentPrice;
  const kwhUsed = (printerWatts / 1000) * printHours;
  const energyCost = kwhUsed * energyRate;
  const baseCost = filamentCost + energyCost;

  // Suggested selling price
  const suggestedSalePrice = baseCost * (1 + desiredMarkup / 100);
  const netProfit = suggestedSalePrice - baseCost;

  return (
    <div className="bg-[#1C0509] border border-red-900/60 rounded-3xl p-5 sm:p-7 shadow-xl">
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-red-950">
        <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-cinzel text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>Calculadora de Lucro e Precificação 3D</span>
            <span className="text-xs">🎄</span>
          </h3>
          <p className="text-xs text-red-200/70">
            Descubra o custo real de cada peça e saiba exatamente quanto cobrar no Natal.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Sliders and inputs */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-red-100">Preço do Filamento (R$/kg)</span>
              <span className="text-amber-400 font-bold">R$ {filamentPrice.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="70"
              max="220"
              step="5"
              value={filamentPrice}
              onChange={(e) => setFilamentPrice(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-red-100">Peso do Modelo STL (gramas)</span>
              <span className="text-amber-400 font-bold">{weight} g</span>
            </div>
            <input
              type="range"
              min="10"
              max="350"
              step="5"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-red-100">Tempo de Impressão (horas)</span>
              <span className="text-amber-400 font-bold">{printHours.toFixed(1)} h</span>
            </div>
            <input
              type="range"
              min="1"
              max="24"
              step="0.5"
              value={printHours}
              onChange={(e) => setPrintHours(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-red-100">Margem de Lucro Desejada</span>
              <span className="text-amber-300 font-bold">+{desiredMarkup}%</span>
            </div>
            <input
              type="range"
              min="200"
              max="1000"
              step="50"
              value={desiredMarkup}
              onChange={(e) => setDesiredMarkup(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Results Card */}
        <div className="bg-[#120204] border border-amber-400/40 rounded-2xl p-5 space-y-4 shadow-inner">
          <div className="grid grid-cols-2 gap-3 text-xs border-b border-red-950 pb-3">
            <div>
              <span className="text-slate-400 block text-[11px]">Custo Filamento:</span>
              <span className="text-white font-bold">R$ {filamentCost.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Energia Elétrica:</span>
              <span className="text-white font-bold">R$ {energyCost.toFixed(2)}</span>
            </div>
            <div className="col-span-2 pt-1 border-t border-red-950/80">
              <span className="text-slate-400 block text-[11px]">Custo Total de Produção:</span>
              <span className="text-amber-300 font-bold text-sm">R$ {baseCost.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-red-200 font-medium">Preço de Venda Recomendado:</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-cinzel">
              R$ {suggestedSalePrice.toFixed(2)}
            </div>
            <span className="text-[11px] text-red-200/60 block">
              Preço competitivo para decorações natalinas exclusivas de alta procura.
            </span>
          </div>

          <div className="p-3 bg-red-950/70 rounded-xl border border-red-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-red-100 font-bold">Lucro Líquido no Bolso:</span>
            </div>
            <span className="text-base font-extrabold text-emerald-300 font-cinzel">
              + R$ {netProfit.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
