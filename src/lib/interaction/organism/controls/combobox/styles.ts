import type { IComboboxStyleClasses } from '$stylist/interaction/organism/controls/combobox/types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing Combobox styling logic
 * Uses CSS variables from the theme system
 */
export class ComboboxStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'c-combobox space-y-2';

    return `${baseClasses} ${className}`;
  }

  static getInputClasses(disabled: boolean): string {
    const baseClasses = 'flex items-center gap-2 rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 text-sm shadow-sm focus-within:border-[var(--color-primary-500)] focus-within:ring-2 focus-within:ring-indigo-500';
    const disabledClasses = disabled ? 'bg-[var(--color-background-secondary)] cursor-not-allowed opacity-[var(--opacity-70)]' : '';

    return `${baseClasses} ${disabledClasses}`;
  }

  static getListboxClasses(): string {
    return 'absolute z-[var(--z-index-docked)] mt-2 max-h-60 w-full overflow-auto rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-lg';
  }

  static getOptionClasses(isDisabled: boolean, isSelected: boolean, isHighlighted: boolean): string {
    const baseClasses = 'w-full text-left px-3 py-2 text-sm flex flex-col gap-1 transition-colors';
    const disabledClasses = isDisabled ? 'text-[var(--color-text-tertiary)] cursor-not-allowed' : 'hover:bg-[var(--color-primary-50)]';
    const selectedClasses = isSelected ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : '';
    const highlightedClasses = isHighlighted ? 'bg-[var(--color-primary-50)]' : '';

    return `${baseClasses} ${disabledClasses} ${selectedClasses} ${highlightedClasses}`;
  }

  static getAllClasses(className: string, disabled: boolean): string {
    const baseClasses = this.getBaseClasses(className);
    const inputClasses = this.getInputClasses(disabled);

    return `${baseClasses} ${inputClasses}`;
  }
}





