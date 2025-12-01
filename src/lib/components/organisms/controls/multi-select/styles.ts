/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MultiSelect styling logic
 * Uses CSS variables from the theme system
 */
import type { IMultiSelectProps } from './types';

export class MultiSelectStyleManager {
  static getContainerClasses(className: string): string {
    return `relative w-full ${className}`;
  }

  static getSelectDisplayClasses(disabled: boolean, isOpen: boolean): string {
    const baseClasses = 'min-h-[42px] w-full px-3 py-2 border rounded-md shadow-sm cursor-pointer flex flex-wrap items';
    const stateClasses = disabled 
      ? 'bg-[--color-background-disabled] cursor-not-allowed' 
      : 'bg-[--color-background-surface] hover:border-[--color-border-hover]';
    
    const focusClasses = isOpen 
      ? 'border-[--color-primary-500] ring-2 ring-[--color-primary-200]' 
      : 'border-[--color-border-primary]';
    
    return `${baseClasses} ${stateClasses} ${focusClasses}`;
  }

  static getPlaceholderClasses(placeholderClass: string): string {
    return `text-[--color-text-disabled] ${placeholderClass}`;
  }

  static getSelectedValueContainerClasses(selectedClass: string): string {
    return `inline-flex items-center px-2 py-1 mr-2 mb-1 text-sm bg-[--color-primary-100] text-[--color-primary-800] rounded-full ${selectedClass}`;
  }

  static getRemoveButtonClasses(): string {
    return 'ml-1 text-[--color-primary-800] hover:text-[--color-primary-900]';
  }

  static getClearButtonClasses(disabled: boolean, hasSelections: boolean): string {
    const baseClasses = 'ml-auto pl-1 text-[--color-text-secondary] hover:text-[--color-text-primary]';
    const disabledClass = (disabled || !hasSelections) ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${disabledClass}`;
  }

  static getChevronClasses(isOpen: boolean): string {
    return `h-5 w-5 text-[--color-text-secondary] transition-transform ${isOpen ? 'rotate-180' : ''}`;
  }

  static getDropdownClasses(dropdownClass: string): string {
    return `absolute z-10 mt-1 w-full bg-[--color-background-surface] border border-[--color-border-primary] rounded-md shadow-lg max-h-60 overflow-auto ${dropdownClass}`;
  }

  static getSearchContainerClasses(): string {
    return 'p-2 border-b border-[--color-border-primary]';
  }

  static getSearchInputClasses(searchInputClass: string): string {
    return `w-full px-3 py-2 border border-[--color-border-primary] rounded-md ${searchInputClass}`;
  }

  static getOptionClasses(optionClass: string, isSelected: boolean, isDisabled: boolean): string {
    const baseClasses = 'px-4 py-2 cursor-pointer hover:bg-[--color-secondary-100]';
    const disabledClass = isDisabled ? 'text-[--color-text-disabled] cursor-not-allowed' : 'cursor-pointer';
    const selectedClass = isSelected ? 'bg-[--color-primary-50] text-[--color-primary-700]' : '';
    
    return `${baseClasses} ${disabledClass} ${optionClass} ${selectedClass}`;
  }

  static getNoOptionsMessageClasses(): string {
    return 'px-4 py-2 text-[--color-text-secondary]';
  }
}