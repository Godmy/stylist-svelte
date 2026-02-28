import type { HTMLCanvasAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { ImageFilter } from '$stylist/design-system/tokens/information/canvas-image';

export type CropArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type CanvasImageEditorProps = {
  width?: number;
  height?: number;
  src?: string;
  cropEnabled?: boolean;
  filter?: ImageFilter;
  cropArea?: CropArea;
  brightness?: number; // 0-200, where 100 is normal
  contrast?: number;   // 0-200, where 100 is normal
  saturation?: number; // 0-200, where 100 is normal
  hue?: number;        // 0-360, where 0 is normal
  variant?: 'default' | 'minimal' | 'advanced';
  size?: ComponentSize;
  class?: string;
} & HTMLCanvasAttributes;
