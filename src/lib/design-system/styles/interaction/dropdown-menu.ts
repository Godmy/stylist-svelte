import type { DropdownPosition, IDropdownMenuStyleClasses } from '$stylist/design-system/props/interaction/dropdown-menu';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing dropdown menu styling logic
 * Uses CSS variables from the theme system
 */
export class DropdownMenuStyleManager {
  static getPositionClasses(position: DropdownPosition): string {
    const positionClasses: Record<DropdownPosition, string> = {
      left: 'dropdown-position-left',
      right: 'dropdown-position-right', 
      center: 'dropdown-position-center'
    };

    return positionClasses[position];
  }

  static getDisabledClass(isDisabled: boolean): string {
    return isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  }

  static getMenuClasses(position: DropdownPosition): string {
    const baseClasses = 'dropdown-menu-base origin-top-right absolute rounded-md shadow-lg bg-[--color-background-primary] ring-1 ring-[--color-border-primary] focus:outline-none z-50';
    const positionClass = this.getPositionClasses(position);
    
    return `${baseClasses} ${positionClass}`;
  }

  static getAllClasses(position: DropdownPosition, isDisabled: boolean, className: string): string {
    const baseClasses = 'dropdown-base relative inline-block text-left';
    const positionClass = this.getPositionClasses(position);
    const disabledClass = this.getDisabledClass(isDisabled);

    return `${baseClasses} ${positionClass} ${disabledClass} ${className}`;
  }
}