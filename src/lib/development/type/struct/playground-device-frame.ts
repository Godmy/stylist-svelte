import type { Snippet } from 'svelte';

export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';

export type Props = {
  device: ViewportSize;
  children?: Snippet;
}
