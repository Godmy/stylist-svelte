import type { LegendItemVariant } from './types';

export class LegendItemStyleManager {
  static getBaseClasses(): string {
    return 'legend-item flex items-center p-2 rounded gap-2 transition-all duration-200 cursor-default';
  }

  static getVariantClasses(variant?: LegendItemVariant, active = false, clickable = false): string {
    const variantClasses = {
      'default': '',
      'primary': '',
      'secondary': '',
      'success': '',
      'warning': '',
      'danger': ''
    };

    // Base classes for different states
    let classes = variantClasses[variant || 'default'] || '';
    
    if (active) {
      classes += ' bg-[--color-bg-selected] border-l-4 border-[--color-primary-500]';
    }
    
    if (clickable) {
      classes += ' cursor-pointer hover:bg-[--color-bg-hover]';
    }
    
    return classes.trim();
  }

  static getIconClasses(): string {
    return 'legend-icon flex items-center justify-center';
  }

  static getLabelClasses(): string {
    return 'legend-label flex-grow text-sm text-[--color-text-primary]';
  }

  static getCountClasses(): string {
    return 'legend-count text-xs text-[--color-text-secondary] bg-[--color-bg-badge] rounded-full px-2 py-0.5';
  }
}