import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  badge?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  badge,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [retryCount, setRetryCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setRetryCount(0);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    // If it is a lh3 googleusercontent link, try the thumbnail endpoint
    if (imgSrc && imgSrc.includes('lh3.googleusercontent.com/d/') && retryCount === 0) {
      const fileId = imgSrc.split('/d/')[1];
      setRetryCount(1);
      setImgSrc(`https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`);
      return;
    }

    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setRetryCount(2);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#180407]">
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-950 via-[#26050B] to-red-900/60 p-4 text-center">
          <svg
            className="w-10 h-10 text-amber-400/90 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="text-xs font-semibold text-red-100 line-clamp-2">
            {alt || 'Modelo 3D STL'}
          </span>
          <span className="text-[10px] text-amber-400 mt-1 uppercase tracking-wider font-bold">
            Arquivo STL Pronto
          </span>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className={className}
          loading="lazy"
          referrerPolicy="no-referrer"
          {...props}
        />
      )}
      {badge && (
        <span className="absolute top-2 left-2 bg-[#200508]/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30 backdrop-blur-xs">
          {badge}
        </span>
      )}
    </div>
  );
};

