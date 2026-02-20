import type { ColorPaletteProps, ColorItem } from '../props/color-palette';

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