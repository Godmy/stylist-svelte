/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing number input styling logic
 * Uses CSS variables from the theme system
 */
export class NumberInputStyleManager {
  static getContainerClasses(className: string): string {
    return `relative inline-flex items-center ${className}`;
  }

  static getDecrementButtonClasses(isDisabled: boolean, buttonClass: string): string {
    const baseClasses = 'p-2 rounded-l-md border border-r-0 border-[--color-border-primary] bg-[--color-surface-secondary] hover:bg-[--color-surface-tertiary] disabled:opacity-50 disabled:cursor-not-allowed';
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${buttonClass} ${disabledClass}`;
  }

  static getIncrementButtonClasses(isDisabled: boolean, buttonClass: string): string {
    const baseClasses = 'p-2 rounded-r-md border border-l-0 border-[--color-border-primary] bg-[--color-surface-secondary] hover:bg-[--color-surface-tertiary] disabled:opacity-50 disabled:cursor-not-allowed';
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${buttonClass} ${disabledClass}`;
  }

  static getInputClasses(isDisabled: boolean, inputClass: string): string {
    const baseClasses = 'w-20 p-2 text-center border-y border-[--color-border-primary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent';
    const disabledClass = isDisabled ? 'bg-[--color-surface-secondary]' : 'bg-[--color-surface-primary]';
    
    return `${baseClasses} ${disabledClass} ${inputClass}`;
  }
}