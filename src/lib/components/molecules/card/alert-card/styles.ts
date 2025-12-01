/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing alert card styling logic
 * Uses CSS variables from the theme system
 */
export class AlertCardStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow-md overflow-hidden';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the main content wrapper
   * @returns CSS class string for the main content wrapper
   */
  static getContentWrapperClass(): string {
    return 'p-[--spacing-lg]';
  }

  /**
   * Creates CSS class string for the icon container
   * @returns CSS class string for the icon container
   */
  static getIconContainerClass(): string {
    return 'flex items-center mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the icon
   * @returns CSS class string for the icon
   */
  static getIconClass(): string {
    return 'w-10 h-10 mr-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the text container (when icon is present)
   * @returns CSS class string for the text container
   */
  static getTextContainerClass(): string {
    return '';
  }

  /**
   * Creates CSS class string for the title
   * @returns CSS class string for the title
   */
  static getTitleClass(): string {
    return 'text-lg font-semibold';
  }

  /**
   * Creates CSS class string for the subtitle
   * @returns CSS class string for the subtitle
   */
  static getSubtitleClass(): string {
    return 'text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the actions container
   * @returns CSS class string for the actions container
   */
  static getActionsContainerClass(): string {
    return 'mt-[--spacing-md]';
  }

  /**
   * Creates CSS class string for action buttons
   * @returns CSS class string for action buttons
   */
  static getActionButtonClass(): string {
    return 'mr-[--spacing-sm] mb-[--spacing-sm] px-4 py-2 bg-[--color-primary-500] text-[--color-text-inverse] rounded hover:bg-[--color-primary-600]';
  }
}