/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing radio button group styling logic
 * Uses CSS variables from the theme system
 */
export class RadioButtonGroupStyleManager {
  /**
   * Creates CSS class string for the radio button group container
   * @param orientation - Orientation of the group (horizontal or vertical)
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the radio button group container
   */
  static getContainerClass(orientation: 'horizontal' | 'vertical', customClass: string = ''): string {
    const baseClass = 'space-y-2';
    const orientationClass = orientation === 'horizontal' 
      ? 'flex flex-row space-y-0 space-x-[--spacing-lg]' 
      : '';
    
    return [baseClass, orientationClass, customClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the option label container
   * @param orientation - Orientation of the group
   * @param disabled - Whether the option is disabled
   * @param optionClass - Additional CSS classes for the option
   * @returns Combined CSS class string for the option label container
   */
  static getOptionClass(orientation: 'horizontal' | 'vertical', disabled: boolean, optionClass: string = ''): string {
    const baseClass = 'flex items-center';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    const marginClass = orientation === 'horizontal' ? 'mr-[--spacing-lg]' : 'mb-[--spacing-sm]';
    
    return [baseClass, disabledClass, marginClass, optionClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the radio input element
   * @param radioClass - Additional CSS classes for the radio
   * @returns Combined CSS class string for the radio input element
   */
  static getRadioClass(radioClass: string = ''): string {
    const baseClass = 'h-4 w-4 text-[--color-primary-600] border-[--color-border-primary] focus:ring-[--color-primary-500]';
    
    return radioClass ? `${baseClass} ${radioClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the option label text
   * @param labelClass - Additional CSS classes for the label
   * @returns Combined CSS class string for the option label text
   */
  static getOptionLabelClass(labelClass: string = ''): string {
    const baseClass = 'ml-[--spacing-sm] block text-sm font-medium text-[--color-text-primary]';
    
    return labelClass ? `${baseClass} ${labelClass}`.trim() : baseClass;
  }
}