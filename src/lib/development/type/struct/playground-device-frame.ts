import type { Snippet } from 'svelte';

export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';

export interface Props {
  device: ViewportSize;
  children?: Snippet;
}
