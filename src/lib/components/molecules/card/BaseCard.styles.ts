/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing base card styling logic
 * Uses CSS variables from the theme system
 */
export class BaseCardStyleManager {
  /**
   * Creates CSS class string for the main card container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the card container
   */
  static getCardClass(customClass: string = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the card header
   * @param headerClass - Additional CSS classes for the header
   * @returns Combined CSS class string for the card header
   */
  static getHeaderClass(headerClass: string = ''): string {
    const baseClass = 'border-b p-[--spacing-md]';
    
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the card title
   * @returns CSS class string for the card title
   */
  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the card description
   * @returns CSS class string for the card description
   */
  static getDescriptionClass(): string {
    return 'pt-[--spacing-xs] text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the card body
   * @param bodyClass - Additional CSS classes for the body
   * @returns Combined CSS class string for the card body
   */
  static getBodyClass(bodyClass: string = ''): string {
    const baseClass = 'p-[--spacing-md]';
    
    return bodyClass ? `${baseClass} ${bodyClass}`.trim() : baseClass;
  }
}