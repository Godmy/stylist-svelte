export class ABTestConfiguratorStyleManager {
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  static getHeaderClass(headerClass: string = ''): string {
    const baseClass = 'border-b p-[--spacing-lg]';

    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  static getTitleClass(): string {
    return 'text-lg font-medium text-[--color-text-primary] flex items-center';
  }

  static getHeaderDescriptionClass(): string {
    return 'mt-1 text-sm text-[--color-text-secondary]';
  }

  static getFormClass(formClass: string = ''): string {
    const baseClass = 'p-[--spacing-lg]';

    return formClass ? `${baseClass} ${formClass}`.trim() : baseClass;
  }

  static getVariantsSectionClass(): string {
    return 'mt-[--spacing-md]';
  }

  static getVariantsHeaderClass(): string {
    return 'flex items-center justify-between';
  }

  static getVariantClass(variantClass: string = ''): string {
    const baseClass = 'border rounded-lg p-[--spacing-md]';

    return variantClass ? `${baseClass} ${variantClass}`.trim() : baseClass;
  }

  static getVariantHeadingClass(): string {
    return 'font-medium text-[--color-text-primary] flex items-center';
  }

  static getVariantDescriptionClass(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  static getVariantControlsClass(): string {
    return 'flex items-center space-x-[--spacing-md]';
  }

  static getAddVariantSectionClass(): string {
    return 'mt-[--spacing-md] p-[--spacing-md] bg-[--color-background-tertiary] rounded-lg';
  }

  static getAddVariantHeadingClass(): string {
    return 'text-sm font-medium text-[--color-text-primary] mb-[--spacing-sm]';
  }

  static getInputClass(hasError: boolean = false): string {
    const baseClass = 'block w-full rounded-md border-[--color-border-primary] shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
    const errorClass = hasError ? 'border-[--color-danger-300]' : '';

    return errorClass ? `${baseClass} ${errorClass}`.trim() : baseClass;
  }

  static getTextareaClass(): string {
    return 'block w-full rounded-md border-[--color-border-primary] shadow-sm focus:outline-none focus:ring-[--color-primary-500] focus:border-[--color-primary-500] sm:text-sm';
  }

  static getLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary]';
  }

  static getErrorMessageClass(): string {
    return 'mt-2 text-sm text-[--color-danger-600]';
  }

  static getFooterClass(footerClass: string = ''): string {
    const baseClass = 'border-t p-[--spacing-lg] flex items-center justify-between';

    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  static getStatusBadgeClass(status: 'draft' | 'running' | 'completed' | 'paused'): string {
    const statusClasses: Record<'draft' | 'running' | 'completed' | 'paused', string> = {
      draft: 'bg-[--color-info-100] text-[--color-info-800]',
      running: 'bg-[--color-success-100] text-[--color-success-800]',
      completed: 'bg-[--color-neutral-100] text-[--color-neutral-800]',
      paused: 'bg-[--color-warning-100] text-[--color-warning-800]'
    };

    return `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${statusClasses[status]}`;
  }

  static getTargetAudienceClass(): string {
    return 'ml-[--spacing-md] text-sm text-[--color-text-secondary] flex items-center';
  }

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

  static getInactiveButtonClass(isActive: boolean): string {
    return `inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none ${
      isActive
        ? 'bg-[--color-success-100] text-[--color-success-800] hover:bg-[--color-success-200]'
        : 'bg-[--color-danger-100] text-[--color-danger-800] hover:bg-[--color-danger-200]'
    }`;
  }

  static getDeleteButtonClass(): string {
    return 'text-[--color-danger-600] hover:text-[--color-danger-900]';
  }

  static getGridLayoutClass(): string {
    return 'grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6';
  }

  static getSpaceBetweenClass(): string {
    return 'flex items-center justify-between';
  }

  static getMarginTopClass(size: 'sm' | 'md' | 'lg' = 'md'): string {
    const sizeClasses: Record<string, string> = {
      sm: 'mt-[--spacing-sm]',
      md: 'mt-[--spacing-md]',
      lg: 'mt-[--spacing-lg]'
    };

    return sizeClasses[size];
  }

  static getIconClass(size: 'sm' | 'md' | 'lg' = 'md'): string {
    const sizeClasses: Record<string, string> = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };

    return `${sizeClasses[size]} text-[--color-text-secondary] mr-[--spacing-xs]`;
  }
}
