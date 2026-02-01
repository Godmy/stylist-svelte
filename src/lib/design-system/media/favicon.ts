import type { Snippet } from 'svelte';

export interface FaviconProps {
  url: string;
  size?: number;
  class?: string;
  content?: Snippet;
  error?: boolean;
  onError?: () => void;
}

export const getFaviconUrl = (url?: string) => {
  if (!url) return null;
  try {
    const parsedUrl = new URL(url);
    return `${parsedUrl.protocol}//${parsedUrl.hostname}/favicon.ico`;
  } catch {
    return null;
  }
};

export const getFaviconClasses = (size: number, className = '') => {
  return {
    image: `w-[${size}px] h-[${size}px] ${className}`.trim(),
    fallback: `w-[${size}px] h-[${size}px] flex items-center justify-center text-xs font-bold bg-[--color-background-muted] text-[--color-text-secondary] rounded ${className}`.trim()
  };
};
