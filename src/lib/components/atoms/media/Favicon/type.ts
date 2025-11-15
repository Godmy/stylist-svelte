import type { HTMLAttributes } from 'svelte/elements';

export type FaviconProps = {
  url?: string;
  size?: number;
  className?: string;
  content?: any; // Snippet type
} & HTMLAttributes<HTMLImageElement>;

export interface FaviconUrlResult {
  url: string;
  isValid: boolean;
}