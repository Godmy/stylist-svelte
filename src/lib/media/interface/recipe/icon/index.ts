import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { Snippet } from 'svelte';

export interface CanvasImageEditorRecipe extends StructIntersectAll<[]> {
  width?: number;
  height?: number;
  src?: string;
  cropEnabled?: boolean;
  filter?: string;
  brightness?: number;
  contrast?: number;
  saturation?: number;
  hue?: number;
  class?: string;
  children?: Snippet;
}
