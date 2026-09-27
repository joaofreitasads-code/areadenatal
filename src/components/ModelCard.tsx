import React, { useState } from 'react';
import { FolderDown } from 'lucide-react';
import { StlItem } from '../types';

interface ModelCardProps {
  item: StlItem;
  onOpenDetails: (item: StlItem) => void;
  priority?: boolean;
}

export const ModelCard: React.FC<ModelCardProps> = ({ item, onOpenDetails, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Direct Drive destination URL (folder or STL)
  const stlFile = item.stls.find(f => f.name.toLowerCase().includes('.stl') || f.downloadUrl.toLowerCase().includes('.stl')) || item.stls[0];
  const driveUrl = item.folderUrl || stlFile?.viewUrl || stlFile?.downloadUrl || 'https://drive.google.com';

  const displayImage = imageError
    ? item.fallbackImage || 'https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=600&q=75'
    : item.image;

  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between border-2 border-red-500/80 hover:border-amber-400 bg-gradient-to-b from-[#660d0d] via-[#4f0909] to-[#2c0404] shadow-xl shadow-red-950/50 hover:shadow-[0_8px_30px_rgba(239,68,68,0.4)]">
      {/* Top Image Section - 100% clean image with progressive skeleton loader */}
      <a 
        href={driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-square w-full overflow-hidden bg-black/40 block cursor-pointer"
        title="Clique para Acessar no Drive"
      >
        {/* Placeholder skeleton while loading to avoid layout shifts */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-red-950/40 animate-pulse flex items-center justify-center">
            <span className="text-xl opacity-30">🎄</span>
          </div>
        )}

        <img
          src={displayImage}
          alt={item.title}
          width={400}
          height={400}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          {...{ fetchpriority: priority ? 'high' : 'low' }}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      </a>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          <h3 
            className="font-cinzel font-black text-base text-white hover:text-amber-300 transition-colors line-clamp-2 cursor-pointer leading-snug"
            onClick={() => onOpenDetails(item)}
            title={item.title}
          >
            {item.title}
          </h3>

          <p className="text-xs mt-1.5 line-clamp-2 leading-relaxed font-normal text-red-100/80">
            {item.description}
          </p>
        </div>

        {/* PROMINENT NEON GREEN BUTTON IN EVERY CARD */}
        <div className="pt-1">
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 bg-[#00ff66] hover:bg-[#25ff79] text-slate-950 shadow-[0_0_25px_rgba(0,255,102,0.7)] hover:shadow-[0_0_35px_rgba(0,255,102,1)] hover:scale-[1.02] active:scale-95 transition-all duration-200 border-2 border-white/80 cursor-pointer"
          >
            <FolderDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[3]" />
            <span>ACESSAR NO DRIVE</span>
          </a>
        </div>
      </div>
    </div>
  );
};
