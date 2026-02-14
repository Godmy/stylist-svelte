export class MultiSelectStyleManager {
  static getContainerClasses(className: string): string {
    return `c-multi-select relative w-full ${className}`.trim();
  }

  static getSelectDisplayClasses(disabled: boolean, isOpen: boolean): string {
    const baseClasses = 'min-h-[42px] w-full px-3 py-2 border rounded-md shadow-sm flex flex-wrap items-center';
    const stateClasses = disabled
      ? 'bg-[--color-background-disabled] cursor-not-allowed'
      : 'bg-[--color-background-surface] cursor-pointer hover:border-[--color-border-hover]';
    const focusClasses = isOpen
      ? 'border-[--color-primary-500] ring-2 ring-[--color-primary-200]'
      : 'border-[--color-border-primary]';
    return `${baseClasses} ${stateClasses} ${focusClasses}`.trim();
  }

  static getPlaceholderClasses(placeholderClass: string): string {
    return `text-[--color-text-disabled] ${placeholderClass}`.trim();
  }

  static getSelectedValueContainerClasses(selectedClass: string): string {
    return `inline-flex items-center px-2 py-1 mr-2 mb-1 text-sm bg-[--color-primary-100] text-[--color-primary-800] rounded-full ${selectedClass}`.trim();
  }

  static getRemoveButtonClasses(): string {
    return 'ml-1 text-[--color-primary-800] hover:text-[--color-primary-900]';
  }

  static getClearButtonClasses(disabled: boolean, hasSelections: boolean): string {
    const disabledClass = disabled || !hasSelections ? 'opacity-50 cursor-not-allowed' : '';
    return `ml-auto pl-1 text-[--color-text-secondary] hover:text-[--color-text-primary] ${disabledClass}`.trim();
  }

  static getChevronClasses(isOpen: boolean): string {
    return `h-5 w-5 text-[--color-text-secondary] transition-transform ${isOpen ? 'rotate-180' : ''}`.trim();
  }

  static getDropdownClasses(dropdownClass: string): string {
    return `absolute z-10 mt-1 w-full bg-[--color-background-surface] border border-[--color-border-primary] rounded-md shadow-lg max-h-60 overflow-auto ${dropdownClass}`.trim();
  }

  static getSearchContainerClasses(): string {
    return 'p-2 border-b border-[--color-border-primary]';
  }

  static getSearchInputClasses(searchInputClass: string): string {
    return `w-full px-3 py-2 border border-[--color-border-primary] rounded-md ${searchInputClass}`.trim();
  }

  static getOptionClasses(optionClass: string, isSelected: boolean, isDisabled: boolean): string {
    const baseClasses = 'px-4 py-2 hover:bg-[--color-secondary-100]';
    const disabledClass = isDisabled ? 'text-[--color-text-disabled] cursor-not-allowed' : 'cursor-pointer';
    const selectedClass = isSelected ? 'bg-[--color-primary-50] text-[--color-primary-700]' : '';
    return `${baseClasses} ${disabledClass} ${optionClass} ${selectedClass}`.trim();
  }

  static getNoOptionsMessageClasses(): string {
    return 'px-4 py-2 text-[--color-text-secondary]';
  }
}

