/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing advanced password input styling logic
 * Uses CSS variables from the theme system
 */
export class AdvancedPasswordInputStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'relative';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the input wrapper
   * @returns CSS class string for the input wrapper
   */
  static getInputWrapperClass(): string {
    return 'relative';
  }

  /**
   * Creates CSS class string for the password input
   * @param disabled - Whether the input is disabled
   * @param inputClass - Additional CSS classes for the input
   * @returns Combined CSS class string for the password input
   */
  static getInputClass(disabled: boolean, inputClass: string = ''): string {
    const baseClass = 'w-full px-3 py-2 pr-10 border border-[--color-border-primary] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
    const disabledClass = disabled 
      ? 'bg-[--color-background-secondary] text-[--color-text-secondary] cursor-not-allowed' 
      : '';
    
    return [baseClass, disabledClass, inputClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the password toggle button
   * @param disabled - Whether the button is disabled
   * @param buttonClass - Additional CSS classes for the button
   * @returns Combined CSS class string for the password toggle button
   */
  static getToggleButtonClass(disabled: boolean, buttonClass: string = ''): string {
    const baseClass = 'absolute inset-y-0 right-0 pr-[--spacing-sm] flex items-center';
    const hiddenClass = disabled ? 'hidden' : 'block';
    
    return [baseClass, buttonClass, hiddenClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the eye icon
   * @returns CSS class string for the eye icon
   */
  static getEyeIconClass(): string {
    return 'h-5 w-5 text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the strength meter container
   * @returns CSS class string for the strength meter container
   */
  static getStrengthMeterContainerClass(): string {
    return 'mt-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the strength meter labels container
   * @returns CSS class string for the strength meter labels container
   */
  static getStrengthLabelsContainerClass(): string {
    return 'flex items-center justify-between mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the strength label
   * @returns CSS class string for the strength label
   */
  static getStrengthLabelClass(): string {
    return 'text-xs font-medium';
  }

  /**
   * Creates CSS class string for the strength value text based on strength level
   * @param strengthLevel - Strength level (0-4)
   * @returns CSS class string for the strength value text
   */
  static getStrengthValueClass(strengthLevel: number): string {
    switch (strengthLevel) {
      case 0:
      case 1:
        return 'text-[--color-danger-600]';
      case 2:
        return 'text-[--color-warning-600]';
      case 3:
        return 'text-[--color-warning-600]';
      case 4:
        return 'text-[--color-success-600]';
      default:
        return 'text-[--color-text-secondary]';
    }
  }

  /**
   * Creates CSS class string for the strength meter background
   * @returns CSS class string for the strength meter background
   */
  static getStrengthMeterBackgroundClass(): string {
    return 'w-full bg-[--color-background-tertiary] rounded-full h-1.5';
  }

  /**
   * Creates CSS class string for the strength meter fill based on strength level
   * @param strengthLevel - Strength level (0-4)
   * @returns CSS class string for the strength meter fill
   */
  static getStrengthMeterFillClass(strengthLevel: number): string {
    let colorClass = '';
    
    switch (strengthLevel) {
      case 0:
      case 1:
        colorClass = 'bg-[--color-danger-500]';
        break;
      case 2:
        colorClass = 'bg-[--color-warning-500]';
        break;
      case 3:
        colorClass = 'bg-[--color-warning-500]';
        break;
      case 4:
        colorClass = 'bg-[--color-success-500]';
        break;
      default:
        colorClass = 'bg-[--color-background-tertiary]';
    }
    
    return `h-1.5 rounded-full ${colorClass}`;
  }
}