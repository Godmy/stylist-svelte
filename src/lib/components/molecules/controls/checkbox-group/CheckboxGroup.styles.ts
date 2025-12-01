/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing checkbox group styling logic
 * Uses CSS variables from the theme system
 */
export class CheckboxGroupStyleManager {
  /**
   * Creates CSS class string for the checkbox group container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the checkbox group container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'checkbox-group';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the legend element
   * @returns CSS class string for the legend element
   */
  static getLegendClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the description paragraph
   * @returns CSS class string for the description paragraph
   */
  static getDescriptionClass(): string {
    return 'text-sm text-[--color-text-secondary] mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the options container
   * @returns CSS class string for the options container
   */
  static getOptionsContainerClass(): string {
    return 'space-y-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the option item wrapper
   * @param itemClass - Additional CSS classes for the item
   * @returns Combined CSS class string for the option item wrapper
   */
  static getItemWrapperClass(itemClass: string = ''): string {
    const baseClass = 'flex items-start';

    return itemClass ? `${baseClass} ${itemClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the checkbox container
   * @returns CSS class string for the checkbox container
   */
  static getCheckboxContainerClass(): string {
    return 'flex items-center h-5';
  }

  /**
   * Creates CSS class string for the text container
   * @returns CSS class string for the text container
   */
  static getTextContainerClass(): string {
    return 'ml-[--spacing-sm] text-sm';
  }

  /**
   * Creates CSS class string for the option label
   * @returns CSS class string for the option label
   */
  static getOptionLabelClass(): string {
    return 'font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the option description
   * @returns CSS class string for the option description
   */
  static getOptionDescriptionClass(): string {
    return 'text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the required indicator
   * @returns CSS class string for the required indicator
   */
  static getRequiredIndicatorClass(): string {
    return 'text-[--color-danger-500]';
  }
}