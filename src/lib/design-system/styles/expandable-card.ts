import type { IExpandableCardProps } from '$stylist/design-system/props/expandable-card';

/**
 * @class ExpandableCardStyleManager
 * @description Style manager for ExpandableCard component following SOLID principles
 * Separates the styling concerns from the component logic (SRP)
 * Provides a centralized way to manage CSS classes based on props and theme
 */
export class ExpandableCardStyleManager {
  /**
   * Get base CSS classes for the expandable card container
   */
  static getBaseClasses(): string {
    return 'border rounded-lg shadow-sm overflow-hidden';
  }

  /**
   * Get CSS classes based on theme and props
   */
  static getThemedClasses(props?: Pick<IExpandableCardProps, 'variant'>): string {
    const { variant = 'default' } = props || {};

    let variantClasses = '';
    switch (variant) {
      case 'minimal':
        variantClasses = 'border-none shadow-none';
        break;
      case 'outlined':
        variantClasses = 'shadow-none border-2';
        break;
      case 'filled':
        variantClasses = 'bg-[--color-background-surface-selected] border-[--color-border-accent]';
        break;
      case 'default':
      default:
        variantClasses = 'border-[--color-border-default] bg-[--color-background-surface]';
        break;
    }

    // Using CSS variables from the theme system
    return `${this.getBaseClasses()}
      ${variantClasses}
      text-[--color-text-primary]`;
  }

  /**
   * Get header classes
   */
  static getHeaderClasses(isDisabled: boolean = false): string {
    const baseClasses = 'w-full flex justify-between items-center p-4 text-left';
    const stateClasses = isDisabled
      ? 'opacity-50 cursor-not-allowed'
      : 'hover:bg-[--color-background-surface-hover] cursor-pointer';

    return `${baseClasses} ${stateClasses}`;
  }

  /**
   * Get title classes
   */
  static getTitleClasses(): string {
    return 'text-lg font-semibold text-[--color-text-primary]';
  }

  /**
   * Get subtitle classes
   */
  static getSubtitleClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Get summary classes
   */
  static getSummaryClasses(): string {
    return 'mt-2';
  }

  /**
   * Get details container classes
   */
  static getDetailsContainerClasses(isExpanded: boolean): string {
    return `overflow-hidden transition-all duration-300 ease-in-out ${
      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`;
  }

  /**
   * Get details content classes
   */
  static getDetailsContentClasses(): string {
    return 'p-4 border-t border-[--color-border-default]';
  }

  /**
   * Get chevron icon classes
   */
  static getChevronClasses(isExpanded: boolean, hasCustomClass?: string): string {
    const baseClasses = `ml-4 h-5 w-5 text-[--color-icon-secondary] transition-transform duration-200`;
    const rotationClass = isExpanded ? 'rotate-180' : '';

    return `${baseClasses} ${rotationClass} ${hasCustomClass || ''}`;
  }
}