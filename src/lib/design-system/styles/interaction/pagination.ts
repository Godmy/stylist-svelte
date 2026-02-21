/**
 * Style manager for the Pagination component
 * Following the design system patterns
 */
export class PaginationStyleManager {
  static getHostClasses(baseClass: string = ''): string {
    return `c-pagination ${baseClass}`;
  }

  static getNavClasses(): string {
    return 'flex items-center space-x-[--spacing-1]'; // Using design system token for spacing
  }

  static getButtonClasses(isActive: boolean = false, isDisabled: boolean = false, customClass: string = ''): string {
    let classes = 'px-[--spacing-3] py-[--spacing-2] rounded-[--radius-md] text-[--text-size-sm] font-[--font-weight-medium] ';

    if (isDisabled) {
      classes += 'bg-[--color-surface-muted] text-[--color-text-disabled] cursor-not-allowed ';
    } else if (isActive) {
      classes += 'bg-[--color-primary-500] text-[--color-text-inverse] ';
    } else {
      classes += 'text-[--color-text-primary] hover:bg-[--color-surface-hover] ';
    }

    return classes + customClass;
  }

  static getIconButtonClasses(isActive: boolean = false, isDisabled: boolean = false, customClass: string = ''): string {
    let classes = 'inline-flex items-center px-[--spacing-3] py-[--spacing-2] rounded-[--radius-md] text-[--text-size-sm] font-[--font-weight-medium] ';

    if (isDisabled) {
      classes += 'bg-[--color-surface-muted] text-[--color-text-disabled] cursor-not-allowed ';
    } else if (isActive) {
      classes += 'bg-[--color-primary-500] text-[--color-text-inverse] ';
    } else {
      classes += 'text-[--color-text-primary] hover:bg-[--color-surface-hover] ';
    }

    return classes + customClass;
  }

  static getDotsClasses(): string {
    return 'px-[--spacing-3] py-[--spacing-2] text-[--text-size-sm] text-[--color-text-secondary]';
  }
}