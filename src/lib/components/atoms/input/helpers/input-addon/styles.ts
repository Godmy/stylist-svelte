import type { InputAddonPosition, InputAddonVariant } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing InputAddon styling logic
 * Uses CSS variables from the theme system
 */
export class InputAddonStyleManager {
  static getPositionClasses(position: InputAddonPosition): string {
    const positionClasses: Record<InputAddonPosition, string> = {
      left: 'pr-3 border-r border-[--color-border-primary]',
      right: 'pl-3 border-l border-[--color-border-primary]'
    };

    return positionClasses[position];
  }

  static getVariantClasses(variant: InputAddonVariant): string {
    const variantClasses: Record<InputAddonVariant, string> = {
      solid: 'bg-[--color-background-secondary] text-[--color-text-secondary]',
      ghost: 'bg-transparent text-[--color-text-secondary]'
    };

    return variantClasses[variant];
  }

  static getAllClasses(position: InputAddonPosition, variant: InputAddonVariant, className: string): string {
    const baseClasses = 'flex items-center justify-center min-w-[2rem] text-sm border-0';
    const positionClasses = this.getPositionClasses(position);
    const variantClasses = this.getVariantClasses(variant);

    return `${baseClasses} ${positionClasses} ${variantClasses} ${className}`;
  }
}