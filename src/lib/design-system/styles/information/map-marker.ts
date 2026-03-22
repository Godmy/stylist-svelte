import type { TokenPin } from '$stylist/design-system/tokens/architecture/pin';
import type { TokenShape } from '$stylist/design-system/tokens/architecture/shape';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

export class MapMarkerStyleManager {
  static getBaseClasses(selected: boolean, hostClass: string): string {
    return `map-marker relative ${selected ? 'z-[var(--z-index-docked)]' : 'z-[var(--z-index-base)]'} ${hostClass}`;
  }

  static getMarkerContainerClasses(iconClass: string): string {
    return `flex flex-col items-center cursor-pointer ${iconClass}`;
  }
  static getPinStyleClasses(size: TokenSize, colorClass: string, selected: boolean, pinStyle: TokenShape): string {
    const sizeClasses = {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-10 w-10',
      '2xl': 'h-12 w-12',
      '1/4': 'h-3 w-3',
      '1/3': 'h-4 w-4',
      '2/5': 'h-4 w-4',
      '1/2': 'h-6 w-6',
      '3/5': 'h-6 w-6',
      '2/3': 'h-8 w-8',
      '3/4': 'h-10 w-10',
      full: 'h-12 w-12'
    }[size] ?? 'h-6 w-6';

    const basePinClass = `${sizeClasses} ${colorClass} ${selected ? 'scale-125' : ''} transition-transform duration-[var(--duration-200)]`;

    switch (pinStyle) {
      case 'vector':
        return basePinClass;
      case 'flag':
        return `relative ${sizeClasses}`;
      case 'circle':
        return `${sizeClasses} ${colorClass} rounded-full border-2 border-[--color-border-primary] shadow-md`;
      case 'diamond':
        return `${sizeClasses} ${colorClass} rotate-45 rounded-br-full`;
      default:
        return basePinClass;
    }
  }
  static getDistanceLabelClasses(): string {
    return 'text-xs bg-[--color-background-surface] px-1 rounded mt-1 shadow-sm text-[--color-text-primary]';
  }

  static getPopupClasses(popupClass: string): string {
    return `absolute z-[var(--z-index-popover)] mt-2 w-64 bg-[--color-background-surface] rounded-lg shadow-lg border border-[--color-border-primary] p-4 ${popupClass}`;
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

  static getColorClass(color: string, type: TokenPin): string {
    if (color) return color;

    const typeColors: Record<TokenPin, string> = {
      business: 'text-[--color-success-500]',
      person: 'text-[--color-purple-500]',
      place: 'text-[--color-warning-500]'
    };

    return typeColors[type];
  }

  static getFlagClasses(colorClass: string, size: TokenSize): string {
    const sizeClasses = {
      xs: 'w-0.5 h-2/3',
      sm: 'w-0.5 h-3/4',
      md: 'w-0.5 h-3/4',
      lg: 'w-0.5 h-3/4',
      xl: 'w-0.5 h-4/5',
      '2xl': 'w-0.5 h-5/6',
      '1/4': 'w-0.5 h-2/3',
      '1/3': 'w-0.5 h-3/4',
      '2/5': 'w-0.5 h-3/4',
      '1/2': 'w-0.5 h-3/4',
      '3/5': 'w-0.5 h-3/4',
      '2/3': 'w-0.5 h-3/4',
      '3/4': 'w-0.5 h-4/5',
      full: 'w-0.5 h-5/6'
    }[size] ?? 'w-0.5 h-3/4';

    return `absolute ${sizeClasses} ${colorClass} bottom-0 left-1/2 transform -translate-x-1/2`;
  }

  static getFlagTopClasses(colorClass: string, size: TokenSize): string {
    const sizeClasses = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-4 h-4',
      lg: 'w-4 h-4',
      xl: 'w-5 h-5',
      '2xl': 'w-6 h-6',
      '1/4': 'w-3 h-3',
      '1/3': 'w-4 h-4',
      '2/5': 'w-4 h-4',
      '1/2': 'w-4 h-4',
      '3/5': 'w-4 h-4',
      '2/3': 'w-4 h-4',
      '3/4': 'w-5 h-5',
      full: 'w-6 h-6'
    }[size] ?? 'w-4 h-4';

    return `absolute top-0 left-1/2 transform -translate-x-full ${colorClass} ${sizeClasses} rounded-full`;
  }
}





