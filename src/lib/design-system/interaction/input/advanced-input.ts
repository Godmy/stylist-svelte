/**
 * Типы для компонента AdvancedInput
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Пропсы компонента AdvancedInput */
export interface IAdvancedInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  onInput?: (value: string) => void;
  class?: string;
}

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing advanced input styling logic
 * Uses CSS variables from the theme system
 */
export class AdvancedInputStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'w-full';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the label
   * @returns CSS class string for the label
   */
  static getLabelClass(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the input
   * @param disabled - Whether the input is disabled
   * @returns CSS class string for the input
   */
  static getInputClass(disabled: boolean = false): string {
    const baseClass = 'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
    const disabledClass = disabled ? 'bg-[--color-background-tertiary] text-[--color-text-secondary]' : 'bg-[--color-background-primary]';

    return `${baseClass} ${disabledClass}`;
  }
}

