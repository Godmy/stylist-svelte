/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing AI result card styling logic
 * Uses CSS variables from the theme system
 */
export class AiResultCardStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'bg-gradient-to-r from-[--color-primary-50] to-[--color-secondary-50] rounded-xl p-[--spacing-lg] border border-[--color-primary-100]';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the main content wrapper
   * @returns CSS class string for the main content wrapper
   */
  static getContentWrapperClass(): string {
    return 'flex items-start';
  }

  /**
   * Creates CSS class string for the icon container
   * @returns CSS class string for the icon container
   */
  static getIconContainerClass(): string {
    return 'mr-[--spacing-md] mt-1';
  }

  /**
   * Creates CSS class string for the icon
   * @returns CSS class string for the icon
   */
  static getIconClass(): string {
    return 'w-8 h-8';
  }

  /**
   * Creates CSS class string for the text content wrapper
   * @returns CSS class string for the text content wrapper
   */
  static getTextContentWrapperClass(): string {
    return 'flex-1';
  }

  /**
   * Creates CSS class string for the title
   * @returns CSS class string for the title
   */
  static getTitleClass(): string {
    return 'text-lg font-semibold text-[--color-text-primary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the description
   * @returns CSS class string for the description
   */
  static getDescriptionClass(): string {
    return 'text-[--color-text-secondary] mb-[--spacing-md]';
  }
}