/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing login form styling logic
 * Uses CSS variables from the theme system
 */
export class LoginFormStyleManager {
  /**
   * Creates CSS class string for the main form container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the form container
   */
  static getFormClass(customClass: string = ''): string {
    const baseClass = 'max-w-md mx-auto p-[--spacing-lg] bg-[--color-background-primary] rounded-lg shadow-md';
    
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the title section
   * @returns CSS class string for the title section
   */
  static getTitleSectionClass(): string {
    return 'mb-[--spacing-lg] text-center';
  }

  /**
   * Creates CSS class string for the title heading
   * @returns CSS class string for the title heading
   */
  static getTitleClass(): string {
    return 'text-2xl font-bold text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the subtitle paragraph
   * @returns CSS class string for the subtitle paragraph
   */
  static getSubtitleClass(): string {
    return 'mt-[--spacing-sm] text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for form fields
   * @param marginBottom - Whether to include bottom margin
   * @returns CSS class string for form fields
   */
  static getFieldClass(marginBottom: boolean = true): string {
    const baseClass = 'w-full px-3 py-2 border border-[--color-border-primary] rounded-md shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
    const marginClass = marginBottom ? 'mb-[--spacing-md]' : '';

    return [baseClass, marginClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for field labels
   * @param marginBottom - Whether to include bottom margin
   * @returns CSS class string for field labels
   */
  static getLabelClass(marginBottom: boolean = true): string {
    const baseClass = 'block text-sm font-medium text-[--color-text-primary]';
    const marginClass = marginBottom ? 'mb-[--spacing-xs]' : '';

    return [baseClass, marginClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the password field container
   * @returns CSS class string for the password field container
   */
  static getPasswordFieldContainerClass(): string {
    return 'relative';
  }

  /**
   * Creates CSS class string for the password toggle button
   * @returns CSS class string for the password toggle button
   */
  static getPasswordToggleClass(): string {
    return 'absolute inset-y-0 right-0 pr-[--spacing-sm] flex items-center';
  }

  /**
   * Creates CSS class string for the eye icon
   * @returns CSS class string for the eye icon
   */
  static getEyeIconClass(): string {
    return 'h-5 w-5 text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the remember me checkbox container
   * @returns CSS class string for the remember me checkbox container
   */
  static getRememberMeContainerClass(): string {
    return 'flex items-center mb-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the remember me label
   * @returns CSS class string for the remember me label
   */
  static getRememberMeLabelClass(): string {
    return 'ml-[--spacing-sm] block text-sm text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the submit button
   * @returns CSS class string for the submit button
   */
  static getSubmitButtonClass(): string {
    return 'w-full flex justify-center py-[--spacing-sm] px-[--spacing-md] border border-transparent rounded-md shadow-sm text-sm font-medium text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-primary-500] disabled:opacity-50';
  }

  /**
   * Creates CSS class string for the loading icon
   * @returns CSS class string for the loading icon
   */
  static getLoadingIconClass(): string {
    return 'animate-spin -ml-1 mr-3 h-5 w-5 text-[--color-text-inverse]';
  }

  /**
   * Creates CSS class string for the separator section
   * @returns CSS class string for the separator section
   */
  static getSeparatorSectionClass(): string {
    return 'mt-[--spacing-lg]';
  }

  /**
   * Creates CSS class string for the separator element
   * @returns CSS class string for the separator element
   */
  static getSeparatorClass(): string {
    return 'relative';
  }

  /**
   * Creates CSS class string for the separator line
   * @returns CSS class string for the separator line
   */
  static getSeparatorLineClass(): string {
    return 'absolute inset-0 flex items-center';
  }

  /**
   * Creates CSS class string for the separator border
   * @returns CSS class string for the separator border
   */
  static getSeparatorBorderClass(): string {
    return 'w-full border-t border-[--color-border-primary]';
  }

  /**
   * Creates CSS class string for the separator text container
   * @returns CSS class string for the separator text container
   */
  static getSeparatorTextContainerClass(): string {
    return 'relative flex justify-center text-sm';
  }

  /**
   * Creates CSS class string for the separator text
   * @returns CSS class string for the separator text
   */
  static getSeparatorTextClass(): string {
    return 'px-[--spacing-xs] bg-[--color-background-primary] text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the social login container
   * @returns CSS class string for the social login container
   */
  static getSocialLoginContainerClass(): string {
    return 'mt-[--spacing-lg] grid grid-cols-2 gap-3';
  }

  /**
   * Creates CSS class string for the social login buttons
   * @returns CSS class string for the social login buttons
   */
  static getSocialLoginButtonClass(): string {
    return 'w-full inline-flex justify-center py-[--spacing-sm] px-[--spacing-md] border border-[--color-border-primary] rounded-md shadow-sm bg-[--color-background-primary] text-sm font-medium text-[--color-text-secondary] hover:bg-[--color-background-secondary]';
  }

  /**
   * Creates CSS class string for the social icon
   * @returns CSS class string for the social icon
   */
  static getSocialIconClass(): string {
    return 'h-5 w-5';
  }

  /**
   * Creates CSS class string for the social icon text margin
   * @returns CSS class string for the social icon text margin
   */
  static getSocialTextMarginClass(): string {
    return 'ml-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the forgot password link
   * @returns CSS class string for the forgot password link
   */
  static getForgotPasswordLinkClass(): string {
    return 'text-sm font-medium text-[--color-primary-600] hover:text-[--color-primary-500]';
  }

  /**
   * Creates CSS class string for the additional links section
   * @returns CSS class string for the additional links section
   */
  static getAdditionalLinksSectionClass(): string {
    return 'mt-[--spacing-lg] text-center';
  }

  /**
   * Creates CSS class string for the additional links container
   * @returns CSS class string for the additional links container
   */
  static getAdditionalLinksContainerClass(): string {
    return 'flex justify-center space-x-4';
  }

  /**
   * Creates CSS class string for the additional links
   * @returns CSS class string for the additional links
   */
  static getAdditionalLinkClass(): string {
    return 'text-sm text-[--color-primary-600] hover:text-[--color-primary-500]';
  }

  /**
   * Creates CSS class string for the separator between links
   * @returns CSS class string for the separator between links
   */
  static getLinkSeparatorClass(): string {
    return 'text-[--color-text-secondary]';
  }
}