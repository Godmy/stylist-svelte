import type { ComponentType, Snippet } from 'svelte';

export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
export type BackgroundType = 'white' | 'gray' | 'dark' | 'transparent';

export interface Props {
  component?: ComponentType | null;
  props?: Record<string, any>;
  children?: Snippet;
  viewport?: ViewportSize;
  zoom?: number;
  background?: BackgroundType;
  showGrid?: boolean;
  showDeviceFrame?: boolean;
  onZoomChange?: (zoom: number) => void;
}
