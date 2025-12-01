/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing alert panel styling logic
 * Uses CSS variables from the theme system
 */
export class AlertPanelStyleManager {
  /**
   * Creates CSS class string for the main container based on status
   * @param status - Alert status type
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(status: 'info' | 'success' | 'warning' | 'error', customClass: string = ''): string {
    const statusClasses: Record<string, string> = {
      info: 'bg-[--color-info-50] text-[--color-info-800] border-l-[--color-info-200]',
      success: 'bg-[--color-success-50] text-[--color-success-800] border-l-[--color-success-200]',
      warning: 'bg-[--color-warning-50] text-[--color-warning-800] border-l-[--color-warning-200]',
      error: 'bg-[--color-danger-50] text-[--color-danger-800] border-l-[--color-danger-200]'
    };

    const baseClass = `border-l-4 p-[--spacing-md] rounded-r border border-[--color-border-primary] ${statusClasses[status]}`;

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
   * Creates CSS class string for the icon
   * @returns CSS class string for the icon
   */
  static getIconClass(): string {
    return 'mr-[--spacing-xs] text-lg';
  }

  /**
   * Creates CSS class string for the text content wrapper
   * @returns CSS class string for the text content wrapper
   */
  static getTextContentWrapperClass(): string {
    return '';
  }

  /**
   * Creates CSS class string for the title
   * @returns CSS class string for the title
   */
  static getTitleClass(): string {
    return 'font-semibold text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the description
   * @returns CSS class string for the description
   */
  static getDescriptionClass(): string {
    return 'mt-[--spacing-xs] text-[--color-text-primary]';
  }
}