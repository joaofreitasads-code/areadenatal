import React, { useState } from 'react';
import { Heart, ArrowDown, Check, Folder } from 'lucide-react';
import { ChristmasModel } from '../data/driveModels';
import { getOptimizedThumb, loadedImagesCache } from '../utils/imageOptimizer';

interface ModelCardProps {
  model: ChristmasModel;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenModel: (model: ChristmasModel) => void;
  onDirectDownload?: (model: ChristmasModel) => void;
  priority?: boolean;
}

export const ModelCard: React.FC<ModelCardProps> = ({
  model,
  isFavorite,
  onToggleFavorite,
  onOpenModel,
  priority = false,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  // Otimização WebP ultra leve (10KB) para celular e conexões móveis
  const optimizedUrl = getOptimizedThumb(model.imageUrl, 320);
  const [isLoaded, setIsLoaded] = useState(() => loadedImagesCache.has(optimizedUrl));

  const downloadCountFormatted = `${(model.downloadsCount / 1000).toFixed(1).replace('.', ',')} mil`;

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}?item=${model.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(model.id);
  };

  const handleImageLoad = () => {
    loadedImagesCache.add(optimizedUrl);
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setImgFailed(true);
    setIsLoaded(true);
  };

  const displaySrc = imgFailed
    ? 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=400&q=75'
    : optimizedUrl;

  return (
    <div
      onClick={() => onOpenModel(model)}
      className="cv-auto group bg-[#16171B] hover:bg-[#1A1C22] active:bg-[#1A1C22] border border-[#26282E] hover:border-[#D4A359]/70 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between select-none"
    >
      {/* 1. Thumbnail Area with Instant Shimmer Skeleton */}
      <div className="relative aspect-square w-full bg-[#101114] overflow-hidden">
        {/* Shimmer skeleton until image loads */}
        {!isLoaded && (
          <div className="absolute inset-0 shimmer-placeholder z-0 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border border-white/5 bg-white/5 animate-pulse" />
          </div>
        )}

        <img
          src={displaySrc}
          alt={model.title}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Top-Right Favorite Heart Toggle */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md active:scale-90 ${
            isFavorite
              ? 'bg-red-500/25 text-red-500 border border-red-500/40 scale-105'
              : 'bg-black/45 text-slate-300 hover:text-white hover:bg-black/70 border border-white/10'
          }`}
          title={isFavorite ? 'Remover dos Favoritos' : 'Salvar nos Favoritos'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
        </button>

        {/* Bottom-Left STL badge matching screenshot */}
        <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md border border-white/15 pointer-events-none">
          {model.files.some(f => f.name.toLowerCase().endsWith('.zip') || f.name.toLowerCase().endsWith('.rar')) ? 'STL + ZIP' : 'STL 3D'}
        </div>

        {/* Special badge (like Card 7 "Novo Modelo") */}
        {model.isNew && (
          <div className="absolute top-2.5 left-2.5 bg-emerald-500/90 text-[#0B0C0E] text-[10px] font-black px-2 py-0.5 rounded-full shadow-md pointer-events-none">
            Novo Modelo
          </div>
        )}
      </div>

      {/* 2. Text Information Area */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between gap-2.5 sm:gap-3">
        <div>
          <h3 className="font-bold text-white text-xs sm:text-sm line-clamp-1 group-hover:text-[#E5B869] transition-colors leading-snug">
            {model.title}
          </h3>
          <span className="text-[11px] text-[#8E909B] font-medium block truncate mt-0.5">
            {model.categoryLabel} • {model.folderName}
          </span>
        </div>

        {/* 3. Metadata Row: Downloads Count & Copiar Link */}
        <div className="flex items-center justify-between text-[11px] text-[#8E909B] pt-1 border-t border-[#22242B]">
          <div className="flex items-center gap-1 font-mono text-slate-300">
            <ArrowDown className="w-3 h-3 text-[#D4A359]" />
            <span>{downloadCountFormatted}</span>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="text-[11px] text-slate-400 hover:text-[#E5B869] active:text-[#E5B869] transition-colors flex items-center gap-1 cursor-pointer font-medium p-0.5"
          >
            {copiedLink ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copiado!</span>
              </>
            ) : (
              <span>Copiar link</span>
            )}
          </button>
        </div>

        {/* 4. Primary CTA Button: Acessar Pasta ↗ matching screenshot */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModel(model);
          }}
          className="w-full min-h-[38px] flex items-center justify-center gap-1.5 bg-[#D4A359] hover:bg-[#E5B869] active:bg-[#C99849] active:scale-[0.98] text-[#0B0C0E] font-bold text-xs py-2 px-3 rounded-xl shadow-md transition-all cursor-pointer"
        >
          <span>Acessar Pasta</span>
          <span className="text-xs">↗</span>
        </button>
      </div>
    </div>
  );
};
