/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MapMarker styling logic
 * Uses CSS variables from the theme system
 */
import type { MarkerType, MarkerCategory, PinStyle } from './types';

export class MapMarkerStyleManager {
  static getBaseClasses(selected: boolean, hostClass: string): string {
    return `map-marker relative ${selected ? 'z-10' : 'z-0'} ${hostClass}`;
  }

  static getMarkerContainerClasses(iconClass: string): string {
    return `flex flex-col items-center cursor-pointer ${iconClass}`;
  }

  static getPinStyleClasses(size: 'sm' | 'md' | 'lg', colorClass: string, selected: boolean, pinStyle: PinStyle): string {
    const sizeClasses = {
      'sm': 'h-4 w-4',
      'md': 'h-6 w-6',
      'lg': 'h-8 w-8'
    }[size];

    const basePinClass = `${sizeClasses} ${colorClass} ${selected ? 'scale-125' : ''} transition-transform duration-200`;

    switch (pinStyle) {
      case 'standard':
        return basePinClass;
      case 'flag':
        return `relative ${sizeClasses}`;
      case 'custom':
        return `${sizeClasses} ${colorClass} rounded-full border-2 border-[--color-border-primary] shadow-md`;
    }
  }

  static getDistanceLabelClasses(): string {
    return 'text-xs bg-[--color-background-surface] px-1 rounded mt-1 shadow-sm text-[--color-text-primary]';
  }

  static getPopupClasses(popupClass: string): string {
    return `absolute z-20 mt-2 w-64 bg-[--color-background-surface] rounded-lg shadow-lg border border-[--color-border-primary] p-4 ${popupClass}`;
  }

  static getTitleClasses(titleClass: string): string {
    return `font-semibold text-[--color-text-primary] ${titleClass}`;
  }

  static getDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary] mt-1';
  }

  static getRatingContainerClasses(): string {
    return 'flex items-center mt-2';
  }

  static getStarClasses(isFilled: boolean, isHalf: boolean = false): string {
    return `w-4 h-4 ${isFilled ? 'text-[--color-warning-500] fill-current' : isHalf ? 'text-[--color-warning-300] fill-current' : 'text-[--color-text-tertiary]'}`;
  }

  static getCloseButtonClasses(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-primary]';
  }

  static getContactInfoContainerClasses(): string {
    return 'mt-3 pt-3 border-t border-[--color-border-secondary]';
  }

  static getContactItemClasses(): string {
    return 'flex items-center text-sm text-[--color-text-secondary] mt-2';
  }

  static getContactLinkClasses(): string {
    return 'hover:text-[--color-primary-600]';
  }

  static getCustomContentClasses(contentClass: string): string {
    return `mt-3 ${contentClass}`;
  }

  static getActionButtonsContainerClasses(): string {
    return 'flex space-x-2 mt-4';
  }

  static getColorClass(color: string, type: MarkerType): string {
    if (color) return color;

    const typeColors: Record<MarkerType, string> = {
      'default': 'text-[--color-primary-500]',
      'business': 'text-[--color-success-500]',
      'person': 'text-[--color-purple-500]',
      'place': 'text-[--color-warning-500]',
      'custom': 'text-[--color-danger-500]'
    };

    return typeColors[type];
  }

  static getFlagClasses(colorClass: string, size: string): string {
    const sizeClasses = {
      'sm': 'w-0.5 h-3/4',
      'md': 'w-0.5 h-3/4',
      'lg': 'w-0.5 h-3/4'
    }[size];

    return `absolute w-0.5 h-3/4 ${colorClass} bottom-0 left-1/2 transform -translate-x-1/2`;
  }

  static getFlagTopClasses(colorClass: string, size: string): string {
    const sizeClasses = {
      'sm': 'w-4 h-4',
      'md': 'w-4 h-4',
      'lg': 'w-4 h-4'
    }[size];

    return `absolute top-0 left-1/2 transform -translate-x-full ${colorClass} ${sizeClasses} rounded-full`;
  }
}