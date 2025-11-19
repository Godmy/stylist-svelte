/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing accessibility toolbar styling logic
 * Uses CSS variables from the theme system
 */
export class AccessibilityToolbarStyleManager {
  /**
   * Creates CSS class string for the main toolbar container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'fixed bottom-[--spacing-md] left-1/2 transform -translate-x-1/2 bg-[--color-background-primary] shadow-lg rounded-full p-[--spacing-sm] z-50';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the toolbar content wrapper
   * @param toolbarClass - Additional CSS classes for the toolbar
   * @returns Combined CSS class string for the toolbar wrapper
   */
  static getToolbarClass(toolbarClass: string = ''): string {
    const baseClass = 'flex items-center space-x-1 p-[--spacing-xs]';
    
    return toolbarClass ? `${baseClass} ${toolbarClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the toolbar buttons
   * @param isActive - Whether the button is active
   * @param buttonClass - Additional CSS classes for the button
   * @returns Combined CSS class string for the toolbar buttons
   */
  static getButtonClass(isActive: boolean, buttonClass: string = ''): string {
    const baseClass = 'p-2 rounded-full hover:bg-[--color-background-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
    const activeClass = isActive 
      ? 'bg-[--color-primary-500] text-[--color-text-inverse]' 
      : 'text-[--color-text-primary]';
    
    return [baseClass, activeClass, buttonClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the font size display
   * @returns CSS class string for the font size display
   */
  static getFontSizeDisplayClass(): string {
    return 'text-sm font-medium px-[--spacing-sm] text-[--color-text-primary]';
  }
}