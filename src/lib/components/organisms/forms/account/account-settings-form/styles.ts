/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing account settings form styling logic
 * Uses CSS variables from the theme system
 */
export class AccountSettingsFormStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the header section
   * @param headerClass - Additional CSS classes for the header
   * @returns Combined CSS class string for the header section
   */
  static getHeaderClass(headerClass: string = ''): string {
    const baseClass = 'border-b px-[--spacing-lg] py-[--spacing-md]';

    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the header title
   * @returns CSS class string for the header title
   */
  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary] flex items-center';
  }

  /**
   * Creates CSS class string for the header description
   * @returns CSS class string for the header description
   */
  static getHeaderDescriptionClass(): string {
    return 'mt-1 text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the main form section
   * @param formClass - Additional CSS classes for the form
   * @returns Combined CSS class string for the main form section
   */
  static getFormClass(formClass: string = ''): string {
    const baseClass = 'p-[--spacing-lg]';

    return formClass ? `${baseClass} ${formClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the form grid layout
   * @returns CSS class string for the form grid layout
   */
  static getFormGridLayoutClass(): string {
    return 'grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6';
  }

  /**
   * Creates CSS class string for form labels
   * @returns CSS class string for form labels
   */
  static getLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for input fields
   * @param hasError - Whether the input has an error
   * @returns CSS class string for input fields
   */
  static getInputClass(hasError: boolean = false): string {
    const baseClass = 'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
    const errorClass = hasError ? 'border-[--color-danger-300]' : 'border-[--color-border-primary]';
    
    return `${baseClass} ${errorClass}`;
  }

  /**
   * Creates CSS class string for input fields with icons
   * @param hasError - Whether the input has an error
   * @returns CSS class string for input fields with icons
   */
  static getInputWithIconClass(hasError: boolean = false): string {
    const baseClass = 'block w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
    const errorClass = hasError ? 'border-[--color-danger-300]' : 'border-[--color-border-primary]';
    
    return `${baseClass} ${errorClass}`;
  }

  /**
   * Creates CSS class string for textarea fields
   * @returns CSS class string for textarea fields
   */
  static getTextareaClass(): string {
    return 'shadow-sm focus:ring-[--color-primary-500] focus:border-[--color-primary-500] block w-full sm:text-sm border border-[--color-border-primary] rounded-md p-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the error message
   * @returns CSS class string for the error message
   */
  static getErrorMessageClass(): string {
    return 'mt-1 text-sm text-[--color-danger-600]';
  }

  /**
   * Creates CSS class string for the error icon
   * @returns CSS class string for the error icon
   */
  static getErrorIconClass(): string {
    return 'h-5 w-5 text-[--color-danger-500]';
  }

  /**
   * Creates CSS class string for the footer section
   * @param footerClass - Additional CSS classes for the footer
   * @returns Combined CSS class string for the footer section
   */
  static getFooterClass(footerClass: string = ''): string {
    const baseClass = 'border-t px-[--spacing-lg] py-[--spacing-md]';

    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the buttons container
   * @returns CSS class string for the buttons container
   */
  static getButtonsContainerClass(): string {
    return 'flex justify-end space-x-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the primary button
   * @param isDisabled - Whether the button is disabled
   * @returns CSS class string for the primary button
   */
  static getPrimaryButtonClass(isDisabled: boolean = false): string {
    const baseClass = 'inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

    return disabledClass ? `${baseClass} ${disabledClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the secondary button
   * @returns CSS class string for the secondary button
   */
  static getSecondaryButtonClass(): string {
    return 'bg-[--color-background-primary] py-2 px-4 border border-[--color-border-primary] rounded-md shadow-sm text-sm font-medium text-[--color-text-primary] hover:bg-[--color-background-secondary] focus:outline-none';
  }

  /**
   * Creates CSS class string for the avatar container
   * @returns CSS class string for the avatar container
   */
  static getAvatarContainerClass(): string {
    return 'flex items-center';
  }

  /**
   * Creates CSS class string for the avatar image
   * @returns CSS class string for the avatar image
   */
  static getAvatarImageClass(): string {
    return 'h-16 w-16 rounded-full';
  }

  /**
   * Creates CSS class string for the avatar placeholder
   * @returns CSS class string for the avatar placeholder
   */
  static getAvatarPlaceholderClass(): string {
    return 'h-16 w-16 rounded-full bg-[--color-background-secondary] flex items-center justify-center';
  }

  /**
   * Creates CSS class string for the avatar icon
   * @returns CSS class string for the avatar icon
   */
  static getAvatarIconClass(): string {
    return 'h-8 w-8 text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the change button
   * @returns CSS class string for the change button
   */
  static getChangeButtonClass(): string {
    return 'bg-[--color-background-primary] py-2 px-3 border border-[--color-border-primary] rounded-md shadow-sm text-sm leading-4 font-medium text-[--color-text-primary] hover:bg-[--color-background-secondary] focus:outline-none';
  }

  /**
   * Creates CSS class string for the avatar description text
   * @returns CSS class string for the avatar description text
   */
  static getAvatarDescriptionClass(): string {
    return 'mt-1 text-xs text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for relative container with icons
   * @param hasError - Whether the input has an error
   * @returns CSS class string for relative container with icons
   */
  static getInputContainerWithIconClass(hasError: boolean = false): string {
    const baseClass = 'mt-1 relative rounded-md shadow-sm';
    const errorClass = hasError ? 'border-[--color-danger-300]' : '';

    return errorClass ? `${baseClass} ${errorClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the input icon container
   * @returns CSS class string for the input icon container
   */
  static getInputIconContainerClass(): string {
    return 'absolute inset-y-0 left-0 pl-[--spacing-xs] flex items-center pointer-events-none';
  }

  /**
   * Creates CSS class string for the error indicator container
   * @returns CSS class string for the error indicator container
   */
  static getErrorIndicatorContainerClass(): string {
    return 'absolute inset-y-0 right-0 pr-[--spacing-xs] flex items-center pointer-events-none';
  }

  /**
   * Creates CSS class string for the loading spinner
   * @returns CSS class string for the loading spinner
   */
  static getLoadingSpinnerClass(): string {
    return 'animate-spin -ml-1 mr-2 h-4 w-4 text-[--color-text-inverse]';
  }
}