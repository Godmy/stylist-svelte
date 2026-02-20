import type { HTMLAttributes } from 'svelte/elements';

export type ColorItem = {
  name: string;
  value: string;
  category?: string;
};

export interface ColorPaletteProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Array of colors to display in the palette
   */
  colors: ColorItem[];
  
  /**
   * Title for the color palette
   * @default 'Color Palette'
   */
  title?: string;
  
  /**
   * Whether to show color labels
   * @default true
   */
  showLabels?: boolean;
  
  /**
   * Whether to show color values
   * @default false
   */
  showValues?: boolean;
  
  /**
   * Number of columns to display
   * @default 5
   */
  columns?: number;
  
  /**
   * Additional CSS classes for the container
   */
  class?: string;
  
  /**
   * Additional CSS classes for each color item
   */
  itemClass?: string;
  
  /**
   * Additional CSS classes for the header
   */
  headerClass?: string;
  
  /**
   * Canonical callback fired when a color receives value input
   */
  onValueInput?: (color: ColorItem) => void;
  
  /**
   * Canonical callback fired when a color value is changed
   */
  onValueChange?: (color: ColorItem) => void;
}