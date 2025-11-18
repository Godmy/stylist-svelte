/**
 * Style manager for ProgressCircle component
 * Follows the Single Responsibility Principle by managing only styling concerns
 */
export class ProgressCircleStyleManager {
  /**
   * Creates CSS class string for ProgressCircle component
   * @param size - The size of the progress circle (sm, md, lg)
   * @param customClass - Additional CSS classes to be applied to the component
   * @returns Combined CSS class string for the ProgressCircle component
   */
  static generateContainerClass(size: 'sm' | 'md' | 'lg' = 'md', customClass?: string): string {
    const sizeClasses = {
      sm: 'w-12 h-12 text-xs',
      md: 'w-16 h-16 text-sm',
      lg: 'w-24 h-24 text-base'
    };
    
    const baseClass = `relative inline-flex items-center justify-center ${sizeClasses[size]}`;
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }
  
  /**
   * Creates CSS class string for the progress circle SVG element
   * @returns CSS class string for the SVG element
   */
  static generateSvgClass(): string {
    return 'h-full w-full';
  }
  
  /**
   * Creates CSS class string for the background circle
   * @returns CSS class string for the background circle
   */
  static generateBackgroundCircleClass(): string {
    return 'opacity-20 text-current';
  }
  
  /**
   * Creates CSS class string for the progress circle
   * @param color - The color of the progress circle
   * @returns Combined CSS class string for the progress circle
   */
  static generateProgressCircleClass(color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray' = 'primary'): string {
    const colorClasses = {
      primary: 'text-indigo-600',
      secondary: 'text-gray-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      danger: 'text-red-600',
      info: 'text-blue-600',
      gray: 'text-gray-400'
    };
    
    return `transition-all ease-out ${colorClasses[color]}`.trim();
  }
  
  /**
   * Creates CSS class string for the percentage label
   * @returns CSS class string for the percentage label
   */
  static generateLabelClass(): string {
    return 'absolute text-xs font-medium text-gray-700 dark:text-gray-300';
  }
}