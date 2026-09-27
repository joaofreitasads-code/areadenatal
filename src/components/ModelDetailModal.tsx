import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Clock, 
  Gauge, 
  ShieldCheck, 
  HelpCircle,
  FolderDown,
  FileCheck
} from 'lucide-react';
import { StlItem } from '../types';

interface ModelDetailModalProps {
  item: StlItem | null;
  onClose: () => void;
}

export const ModelDetailModal: React.FC<ModelDetailModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const stlFile = item.stls.find(f => f.name.toLowerCase().includes('.stl') || f.downloadUrl.toLowerCase().includes('.stl')) || item.stls[0];
  const driveUrl = item.folderUrl || stlFile?.viewUrl || stlFile?.downloadUrl || 'https://drive.google.com';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Box */}
      <div className="relative w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border-2 bg-[#400808] border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.5)]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b bg-[#550b0b] border-red-700/80">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-red-600 text-white shadow-md font-extrabold border border-amber-300">
              🎅 Pack Natalino 3D
            </span>

            <span className="text-xs font-bold px-3 py-1 rounded-full border bg-red-950 text-amber-200 border-red-700">
              {item.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white hover:text-red-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Model Preview Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-inner">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Model Info */}
            <div className="space-y-4">
              <div>
                <h2 className="font-cinzel text-xl sm:text-2xl font-black text-white">
                  {item.title}
                </h2>
                <p className="text-xs text-red-200 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Slicing Quick Info */}
              <div className="p-4 rounded-xl border space-y-2 bg-[#2d0505] border-red-800">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  ⚙️ Recomendações de Impressão
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-red-100">
                  <div>
                    <span className="text-white/60 block">Infill (Preenchimento):</span>
                    <strong className="text-white">10% a 15% Gyroid</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Paredes:</span>
                    <strong className="text-white">3 a 4 Perímetros</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Suportes:</span>
                    <strong className="text-white">Árvore (Tree Support)</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Material:</span>
                    <strong className="text-white">PLA / PETG / Resina</strong>
                  </div>
                </div>
              </div>

              {/* Prominent Drive Button */}
              <a
                href={driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 bg-[#00ff66] hover:bg-[#25ff79] text-slate-950 shadow-[0_0_30px_rgba(0,255,102,0.8)] border-2 border-white/80 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <FolderDown className="w-5 h-5 text-slate-950 stroke-[3]" />
                <span>ACESSAR NO GOOGLE DRIVE</span>
              </a>
            </div>
          </div>

          {/* Files List Inside Item */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Arquivos STL e Pastas Inclusos:
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {item.stls.map((file, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl border bg-black/40 border-red-900/60"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-white truncate font-medium">
                      {file.name}
                    </span>
                  </div>
                  <a
                    href={file.downloadUrl || file.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 ml-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#00ff66] text-slate-950 hover:bg-[#25ff79] flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Baixar</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
