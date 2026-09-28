/**
 * Utilitários para carregamento ultra-rápido de imagens (WebP, CDNs, Prefetch & Caching)
 * Otimizado especificamente para conexões móveis (3G/4G/5G) e celulares.
 */

// Cache em memória para evitar relayouts e flickering quando o usuário filtrar ou voltar
export const loadedImagesCache = new Set<string>();

/**
 * Converte URLs do Google Drive / lh3 para WebP ultracompacto (=s320-rw)
 * Reduz o tamanho de ~65KB para ~10KB (85% de economia de banda!)
 * No celular, carrega instantaneamente mesmo em 3G/4G.
 */
export function getOptimizedThumb(url: string, size: 240 | 320 | 480 | 600 = 320): string {
  if (!url) return '';

  if (url.includes('googleusercontent.com/d/')) {
    const id = url.split('/d/')[1].split('=')[0];
    return `https://lh3.googleusercontent.com/d/${id}=s${size}-rw`;
  }

  if (url.includes('unsplash.com')) {
    return url.replace(/w=\d+/, `w=${size}`).replace(/q=\d+/, 'q=75') + '&auto=format';
  }

  return url;
}

/**
 * URL de alta resolução para quando o usuário abre o modal de detalhes ou zoom
 */
export function getHighResImage(url: string): string {
  if (!url) return '';

  if (url.includes('googleusercontent.com/d/')) {
    const id = url.split('/d/')[1].split('=')[0];
    return `https://lh3.googleusercontent.com/d/${id}=s900-rw`;
  }

  return url;
}

// Fila interna de prefetch para não sobrecarregar a banda do celular
const prefetchQueue: string[] = [];
let isPrefetching = false;

function processPrefetchQueue() {
  if (prefetchQueue.length === 0) {
    isPrefetching = false;
    return;
  }

  isPrefetching = true;
  const nextBatch = prefetchQueue.splice(0, 4);

  nextBatch.forEach((url) => {
    if (loadedImagesCache.has(url)) return;
    const img = new Image();
    img.decoding = 'async';
    // @ts-ignore
    img.fetchPriority = 'low';
    img.referrerPolicy = 'no-referrer';
    img.src = url;
    img.onload = () => loadedImagesCache.add(url);
    img.onerror = () => {};
  });

  const nextTick = () => {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(processPrefetchQueue, { timeout: 150 });
    } else {
      setTimeout(processPrefetchQueue, 80);
    }
  };

  nextTick();
}

/**
 * Pré-carrega no navegador as primeiras imagens visíveis para zero delay no primeiro carregamento
 * e enfileira as próximas para download em segundo plano.
 */
export function preloadCriticalImages(urls: string[]): void {
  if (typeof window === 'undefined' || !urls || urls.length === 0) return;

  // Lote imediato crítico (primeiras 8 imagens para visão imediata no celular)
  const critical = urls.slice(0, 8);
  critical.forEach((rawUrl) => {
    const optimized = getOptimizedThumb(rawUrl, 320);
    if (loadedImagesCache.has(optimized)) return;

    const img = new Image();
    img.decoding = 'async';
    // @ts-ignore
    img.fetchPriority = 'high';
    img.referrerPolicy = 'no-referrer';
    img.src = optimized;
    img.onload = () => loadedImagesCache.add(optimized);
  });

  // Enfileira os próximos 16 itens para prefetch de baixa prioridade em momentos ociosos
  const secondary = urls.slice(8, 24);
  secondary.forEach((rawUrl) => {
    const optimized = getOptimizedThumb(rawUrl, 320);
    if (!loadedImagesCache.has(optimized) && !prefetchQueue.includes(optimized)) {
      prefetchQueue.push(optimized);
    }
  });

  if (!isPrefetching && prefetchQueue.length > 0) {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(processPrefetchQueue, { timeout: 300 });
    } else {
      setTimeout(processPrefetchQueue, 150);
    }
  }
}
