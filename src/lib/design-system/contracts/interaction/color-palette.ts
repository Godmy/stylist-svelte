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

// Presets moved from presets\color-palette.ts

const defaultColors: ColorItem[] = [
  { name: 'Red', value: '#EF4444' },
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Green', value: '#10B981' },
  { name: 'Yellow', value: '#F59E0B' },
  { name: 'Purple', value: '#8B5CF6' },
  { name: 'Pink', value: '#EC4899' },
  { name: 'Indigo', value: '#6366F1' },
  { name: 'Gray', value: '#6B7280' }
];

export const colorPalettePresets: Record<string, Partial<ColorPaletteProps>> = {
  default: {
    colors: defaultColors,
    title: 'Color Palette',
    showLabels: true,
    showValues: false,
    columns: 4
  },
  withValues: {
    colors: defaultColors,
    title: 'Color Palette with Values',
    showLabels: true,
    showValues: true,
    columns: 3
  },
  compact: {
    colors: defaultColors.slice(0, 4),
    title: 'Compact Palette',
    showLabels: false,
    showValues: false,
    columns: 4
  }
};

