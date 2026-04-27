import type { ComponentType, Snippet } from 'svelte';
import type { PlaygroundCanvasShellViewportSize } from '$stylist/playground/type/struct/playground-canvas-shell-viewport-size';
import type { PlaygroundCanvasShellBackgroundType } from '$stylist/playground/type/struct/playground-canvas-shell-background-type';

export type PlaygroundCanvasShellProps = {
  component?: ComponentType | null;
  props?: Record<string, any>;
  children?: Snippet;
  viewport?: PlaygroundCanvasShellViewportSize;
  zoom?: number;
  background?: PlaygroundCanvasShellBackgroundType;
  showGrid?: boolean;
  showDeviceFrame?: boolean;
  onZoomChange?: (zoom: number) => void;
}
