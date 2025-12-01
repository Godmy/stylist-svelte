/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing advanced toggle styling logic
 * Uses CSS variables from the theme system
 */
export class AdvancedToggleStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'flex items-center';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the toggle label wrapper
   * @returns CSS class string for the toggle label wrapper
   */
  static getLabelWrapperClass(): string {
    return 'flex items-center cursor-pointer';
  }

  /**
   * Creates CSS class string for the toggle container
   * @returns CSS class string for the toggle container
   */
  static getToggleContainerClass(): string {
    return 'relative';
  }

  /**
   * Creates CSS class string for the hidden input
   * @returns CSS class string for the hidden input
   */
  static getHiddenInputClass(): string {
    return 'sr-only';
  }

  /**
   * Creates CSS class string for the toggle background
   * @param isChecked - Whether the toggle is checked
   * @returns CSS class string for the toggle background
   */
  static getToggleBackgroundClass(isChecked: boolean): string {
    const baseClass = 'block w-14 h-8 rounded-full';
    const stateClass = isChecked ? 'bg-[--color-primary-500]' : 'bg-[--color-background-tertiary]';

    return `${baseClass} ${stateClass}`;
  }

  /**
   * Creates CSS class string for the toggle handle
   * @param isChecked - Whether the toggle is checked
   * @returns CSS class string for the toggle handle
   */
  static getToggleHandleClass(isChecked: boolean): string {
    const baseClass = 'absolute left-[--spacing-xs] top-[--spacing-xs] bg-[--color-background-primary] w-6 h-6 rounded-full transition-transform';
    const positionClass = isChecked ? 'transform translate-x-6' : '';

    return [baseClass, positionClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the toggle label text
   * @param disabled - Whether the toggle is disabled
   * @returns CSS class string for the toggle label text
   */
  static getLabelTextClass(disabled: boolean = false): string {
    const baseClass = 'ml-[--spacing-md] font-medium';
    const stateClass = disabled ? 'text-[--color-text-disabled]' : 'text-[--color-text-primary]';

    return `${baseClass} ${stateClass}`;
  }
}