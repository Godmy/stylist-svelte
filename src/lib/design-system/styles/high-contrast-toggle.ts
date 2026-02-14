import { cn } from '../utils/cn';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing high contrast toggle styling logic
 * Uses CSS variables from the theme system
 */
export class HighContrastToggleStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'flex items-center';

    return cn(baseClass, customClass);
  }

  /**
   * Creates CSS class string for the toggle button
   * @param isHighContrast - Whether high contrast mode is active
   * @param theme - Theme type ('light' or 'dark')
   * @param buttonClass - Additional CSS classes for the button
   * @returns Combined CSS class string for the toggle button
   */
  static getButtonClass(isHighContrast: boolean, theme: 'light' | 'dark', buttonClass: string = ''): string {
    const baseClass = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse] focus:outline-none focus:ring-2 focus:ring-offset-2';
    let themeClass = '';

    if (isHighContrast) {
      themeClass = 'bg-[--color-warning-600] hover:bg-[--color-warning-700] focus:ring-[--color-warning-500]';
    } else {
      if (theme === 'dark') {
        themeClass = 'bg-[--color-background-secondary] hover:bg-[--color-background-tertiary] focus:ring-[--color-border-primary]';
      } else {
        themeClass = 'bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:ring-[--color-primary-500]';
      }
    }

    return cn(baseClass, themeClass, buttonClass);
  }

  /**
   * Creates CSS class string for the description text
   * @returns CSS class string for the description text
   */
  static getDescriptionClass(): string {
    return 'ml-[--spacing-md] text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the contrast icon
   * @returns CSS class string for the contrast icon
   */
  static getIconClass(): string {
    return 'h-4 w-4 mr-[--spacing-xs]';
  }
}
