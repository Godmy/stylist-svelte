import type { ISelectProps } from '$stylist/design-system/props/interaction/selector';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Select styling logic
 * Uses CSS variables from the theme system
 */
export class SelectStyleManager {
  static getSelectClasses(hasError: boolean, disabled: boolean, className: string): string {
    const baseClasses =
      'select-trigger w-full flex items-center justify-between gap-3 rounded-2xl border px-4 py-2.5 text-left text-sm font-semibold text-[--color-text-primary] bg-[--color-background-primary] shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    const stateClasses = hasError
      ? 'border-[--color-danger-500] focus-visible:ring-[--color-danger-300]'
      : 'border-[--color-border-primary] hover:border-[--color-primary-400] focus-visible:ring-[--color-primary-300]';
    const disabledClasses = disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer';

    return `${baseClasses} ${stateClasses} ${disabledClasses} ${className}`.trim();
  }

  static getLabelClasses(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-1';
  }

  static getErrorClasses(): string {
    return 'mt-1 text-sm text-[--color-danger-600]';
  }

  static getContainerClasses(): string {
    return 'mb-[--spacing-md]';
  }

  static getFieldWrapperClasses(): string {
    return 'relative';
  }

  static getChevronClasses(disabled: boolean, hasError: boolean): string {
    const baseClasses =
      'pointer-events-none absolute inset-y-0 right-4 flex h-full items-center text-[--color-text-secondary] transition';
    const errorClasses = hasError ? 'text-[--color-danger-500]' : '';
    const disabledClasses = disabled ? 'opacity-40' : '';

    return `${baseClasses} ${errorClasses} ${disabledClasses}`.trim();
  }

  static getValueClasses(hasValue: boolean, disabled: boolean): string {
    const baseClasses = 'truncate';
    const placeholderClasses = hasValue
      ? 'text-[--color-text-primary]'
      : 'text-[--color-text-secondary]';
    const disabledClasses = disabled ? 'opacity-70' : '';

    return `${baseClasses} ${placeholderClasses} ${disabledClasses}`.trim();
  }

  static getDropdownClasses(): string {
    return 'select-dropdown absolute left-0 right-0 z-[80] mt-2 max-h-64 overflow-auto rounded-3xl border border-[--color-border-primary] bg-[--color-background-primary] p-2 shadow-2xl shadow-black/10';
  }

  static getOptionClasses(selected: boolean, highlighted: boolean, disabled: boolean): string {
    const baseClasses =
      'select-option flex items-center justify-between rounded-2xl px-4 py-2 text-sm font-medium transition';
    const selectedClasses = selected
      ? 'bg-[--color-primary-600] text-[--color-text-inverse]'
      : 'text-[--color-text-primary]';
    const highlightedClasses = highlighted && !selected
      ? 'bg-[--color-background-secondary]'
      : '';
    const disabledClasses = disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer';

    const stateTokens = [
      selected ? 'is-selected' : '',
      highlighted ? 'is-highlighted' : ''
    ].join(' ');

    return `${baseClasses} ${stateTokens} ${selectedClasses} ${highlightedClasses} ${disabledClasses}`.trim();
  }

  static getEmptyStateClasses(): string {
    return 'px-4 py-3 text-center text-sm text-[--color-text-secondary]';
  }
}
