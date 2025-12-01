/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing AB test configurator styling logic
 * Uses CSS variables from the theme system
 */
export class ABTestConfiguratorStyleManager {
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
    const baseClass = 'border-b p-[--spacing-lg]';

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
   * Creates CSS class string for the variants section
   * @returns CSS class string for the variants section
   */
  static getVariantsSectionClass(): string {
    return 'mt-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the variants header
   * @returns CSS class string for the variants header
   */
  static getVariantsHeaderClass(): string {
    return 'flex items-center justify-between';
  }

  /**
   * Creates CSS class string for the variant item
   * @param variantClass - Additional CSS classes for the variant
   * @returns Combined CSS class string for the variant item
   */
  static getVariantClass(variantClass: string = ''): string {
    const baseClass = 'border rounded-lg p-[--spacing-md]';

    return variantClass ? `${baseClass} ${variantClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the variant heading
   * @returns CSS class string for the variant heading
   */
  static getVariantHeadingClass(): string {
    return 'font-medium text-[--color-text-primary] flex items-center';
  }

  /**
   * Creates CSS class string for the variant description
   * @returns CSS class string for the variant description
   */
  static getVariantDescriptionClass(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Creates CSS class string for the variant controls
   * @returns CSS class string for the variant controls
   */
  static getVariantControlsClass(): string {
    return 'flex items-center space-x-[--spacing-md]';
  }

  /**
   * Creates CSS class string for the add variant section
   * @returns CSS class string for the add variant section
   */
  static getAddVariantSectionClass(): string {
    return 'mt-[--spacing-md] p-[--spacing-md] bg-[--color-background-tertiary] rounded-lg';
  }

  /**
   * Creates CSS class string for the add variant heading
   * @returns CSS class string for the add variant heading
   */
  static getAddVariantHeadingClass(): string {
    return 'text-sm font-medium text-[--color-text-primary] mb-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the input field
   * @returns CSS class string for the input field
   */
  static getInputClass(hasError: boolean = false): string {
    const baseClass = 'block w-full rounded-md border-[--color-border-primary] shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
    const errorClass = hasError ? 'border-[--color-danger-300]' : '';

    return errorClass ? `${baseClass} ${errorClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the textarea field
   * @returns CSS class string for the textarea field
   */
  static getTextareaClass(): string {
    const baseClass = 'block w-full rounded-md border-[--color-border-primary] shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';

    return baseClass;
  }

  /**
   * Creates CSS class string for the label
   * @returns CSS class string for the label
   */
  static getLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the error message
   * @returns CSS class string for the error message
   */
  static getErrorMessageClass(): string {
    return 'mt-2 text-sm text-[--color-danger-600]';
  }

  /**
   * Creates CSS class string for the footer section
   * @param footerClass - Additional CSS classes for the footer
   * @returns Combined CSS class string for the footer section
   */
  static getFooterClass(footerClass: string = ''): string {
    const baseClass = 'border-t p-[--spacing-lg] flex items-center justify-between';

    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the status badge
   * @returns CSS class string for the status badge
   */
  static getStatusBadgeClass(status: 'draft' | 'running' | 'completed' | 'paused'): string {
    const statusClasses: Record<'draft' | 'running' | 'completed' | 'paused', string> = {
      draft: 'bg-[--color-info-100] text-[--color-info-800]',
      running: 'bg-[--color-success-100] text-[--color-success-800]',
      completed: 'bg-[--color-neutral-100] text-[--color-neutral-800]',
      paused: 'bg-[--color-warning-100] text-[--color-warning-800]'
    };

    return `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${statusClasses[status]}`;
  }

  /**
   * Creates CSS class string for the target audience text
   * @returns CSS class string for the target audience text
   */
  static getTargetAudienceClass(): string {
    return 'ml-[--spacing-md] text-sm text-[--color-text-secondary] flex items-center';
  }

  /**
   * Creates CSS class string for the button
   * @returns CSS class string for the button
   */
  static getButtonClass(variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' = 'primary', isDisabled: boolean = false): string {
    const baseClass = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse] focus:outline-none';
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

    const variantClasses: Record<string, string> = {
      primary: 'bg-[--color-primary-600] hover:bg-[--color-primary-700]',
      secondary: 'bg-[--color-secondary-600] hover:bg-[--color-secondary-700]',
      success: 'bg-[--color-success-600] hover:bg-[--color-success-700]',
      warning: 'bg-[--color-warning-600] hover:bg-[--color-warning-700]',
      danger: 'bg-[--color-danger-600] hover:bg-[--color-danger-700]',
      info: 'bg-[--color-info-600] hover:bg-[--color-info-700]'
    };

    const variantClass = variantClasses[variant] || variantClasses.primary;

    return `${baseClass} ${variantClass} ${disabledClass}`.trim();
  }

  /**
   * Creates CSS class string for the inactive button
   * @returns CSS class string for the inactive button
   */
  static getInactiveButtonClass(isActive: boolean): string {
    return `inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none ${
      isActive
        ? 'bg-[--color-success-100] text-[--color-success-800] hover:bg-[--color-success-200]'
        : 'bg-[--color-danger-100] text-[--color-danger-800] hover:bg-[--color-danger-200]'
    }`;
  }

  /**
   * Creates CSS class string for the delete button
   * @returns CSS class string for the delete button
   */
  static getDeleteButtonClass(): string {
    return 'text-[--color-danger-600] hover:text-[--color-danger-900]';
  }

  /**
   * Creates CSS class string for the grid layout
   * @returns CSS class string for the grid layout
   */
  static getGridLayoutClass(): string {
    return 'grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6';
  }

  /**
   * Creates CSS class string for the space between elements
   * @returns CSS class string for the space between elements
   */
  static getSpaceBetweenClass(): string {
    return 'flex items-center justify-between';
  }

  /**
   * Creates CSS class string for small margin top
   * @returns CSS class string for small margin top
   */
  static getMarginTopClass(size: 'sm' | 'md' | 'lg' = 'md'): string {
    const sizeClasses: Record<string, string> = {
      sm: 'mt-[--spacing-sm]',
      md: 'mt-[--spacing-md]',
      lg: 'mt-[--spacing-lg]'
    };

    return sizeClasses[size];
  }

  /**
   * Creates CSS class string for the icon
   * @returns CSS class string for the icon
   */
  static getIconClass(size: 'sm' | 'md' | 'lg' = 'md'): string {
    const sizeClasses: Record<string, string> = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };

    return `${sizeClasses[size]} text-[--color-text-secondary] mr-[--spacing-xs]`;
  }
}