import type { IComboboxStyleClasses } from './types';

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
    const baseClasses = 'flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500';
    const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed opacity-70' : '';

    return `${baseClasses} ${disabledClasses}`;
  }

  static getListboxClasses(): string {
    return 'absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg';
  }

  static getOptionClasses(isDisabled: boolean, isSelected: boolean, isHighlighted: boolean): string {
    const baseClasses = 'w-full text-left px-3 py-2 text-sm flex flex-col gap-1 transition-colors';
    const disabledClasses = isDisabled ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-indigo-50';
    const selectedClasses = isSelected ? 'bg-indigo-100 text-indigo-700' : '';
    const highlightedClasses = isHighlighted ? 'bg-indigo-50' : '';

    return `${baseClasses} ${disabledClasses} ${selectedClasses} ${highlightedClasses}`;
  }

  static getAllClasses(className: string, disabled: boolean): string {
    const baseClasses = this.getBaseClasses(className);
    const inputClasses = this.getInputClasses(disabled);

    return `${baseClasses} ${inputClasses}`;
  }
}