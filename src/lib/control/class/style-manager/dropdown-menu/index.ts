import type { IDropdownMenuStyleClasses } from '$stylist/control/interface/component/dropdown-menu/other';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';

/**
 * TokenBorderStyle utility class following Single Responsibility Principle
 * Responsible only for managing dropdown menu styling logic
 * Uses CSS variables from the theme system
 */
export class DropdownMenuStyleManager {
  private static normalizePosition(position: TokenAlignment): 'left' | 'right' | 'center' {
    if (position === 'right' || position.startsWith('right')) return 'right';
    if (position === 'center' || position === 'justify') return 'center';
    return 'left';
  }

  static getPositionClasses(position: TokenAlignment): string {
    const positionClasses = {
      left: 'dropdown-position-left',
      right: 'dropdown-position-right', 
      center: 'dropdown-position-center'
    } as const;

    return positionClasses[this.normalizePosition(position)];
  }

  static getDisabledClass(isDisabled: boolean): string {
    return isDisabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '';
  }

  static getMenuClasses(position: TokenAlignment): string {
    const baseClasses = 'dropdown-menu-base origin-top-right absolute rounded-md shadow-lg bg-[--color-background-primary] ring-1 ring-[--color-border-primary] focus:outline-none z-[var(--z-index-modal)]';
    const positionClass = this.getPositionClasses(position);
    
    return `${baseClasses} ${positionClass}`;
  }

  static getAllClasses(position: TokenAlignment, isDisabled: boolean, className: string): string {
    const baseClasses = 'dropdown-base relative inline-block text-left';
    const positionClass = this.getPositionClasses(position);
    const disabledClass = this.getDisabledClass(isDisabled);

    return `${baseClasses} ${positionClass} ${disabledClass} ${className}`;
  }
}







