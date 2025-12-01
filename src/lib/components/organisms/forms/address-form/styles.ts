/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing address form styling logic
 * Uses CSS variables from the theme system
 */
export class AddressFormStyleManager {
  /**
   * Creates CSS class string for the main form container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'address-form';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the form grid layout
   * @param formClass - Additional CSS classes for the form
   * @returns Combined CSS class string for the form grid
   */
  static getFormGridClass(formClass: string = ''): string {
    const baseClass = 'grid grid-cols-1 md:grid-cols-2 gap-4';

    return formClass ? `${baseClass} ${formClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for a form field container
   * @param fieldClass - Additional CSS classes for the field
   * @returns Combined CSS class string for the field container
   */
  static getFieldContainerClass(fieldClass: string = ''): string {
    return fieldClass ? `col-span-1 ${fieldClass}`.trim() : 'col-span-1';
  }

  /**
   * Creates CSS class string for the country field container (spans 2 columns)
   * @param fieldClass - Additional CSS classes for the field
   * @returns Combined CSS class string for the country field container
   */
  static getCountryFieldContainerClass(fieldClass: string = ''): string {
    return fieldClass ? `input-group-container col-span-2 ${fieldClass}`.trim() : 'input-group-container col-span-2';
  }

  /**
   * Creates CSS class string for labels
   * @param isRequired - Whether the field is required
   * @returns CSS class string for labels
   */
  static getLabelClass(isRequired: boolean = false): string {
    const baseClass = 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
    const requiredClass = isRequired ? 'after:content-["*"] after:ml-[--spacing-xs] after:text-[--color-danger-500]' : '';

    return [baseClass, requiredClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for select elements
   * @param disabled - Whether the field is disabled
   * @returns CSS class string for select elements
   */
  static getSelectClass(disabled: boolean = false): string {
    const baseClass = 'mt-1 block w-full pl-3 pr-10 py-2 text-base border-[--color-border-primary] focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm rounded-md';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return [baseClass, disabledClass].filter(Boolean).join(' ');
  }
}