/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ThemeProvider styling logic
 * Uses CSS variables from the theme system
 */
export class ThemeProviderStyleManager {
  /**
   * Creates CSS class string for the theme provider container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the theme provider container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'w-full h-full';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for applying theme variables to the root element
   * @param themeName - Name of the current theme
   * @returns CSS class string for applying theme variables
   */
  static getThemeRootClass(themeName: 'light' | 'dark'): string {
    // Instead of returning a class, we'll use CSS variables directly
    // This method would be used to determine which theme variables to apply
    return themeName === 'dark' ? 'theme-dark' : 'theme-light';
  }
}