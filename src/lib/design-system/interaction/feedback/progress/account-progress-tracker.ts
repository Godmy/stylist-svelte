/**
 * Типы для компонента AccountProgressTracker
 * Следует принципам SOLID и архитектуре SAMO
 */

/** Пропсы компонента AccountProgressTracker */
export interface IAccountProgressTrackerProps {
  steps: string[];
  currentStep?: number;
  class?: string;
}

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing account progress tracker styling logic
 * Uses CSS variables from the theme system
 */
export class AccountProgressTrackerStyleManager {
  /**
   * Creates CSS class string for the main container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'flex items-center';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the step indicator
   * @param isCompleted - Whether the step is completed
   * @returns CSS class string for the step indicator
   */
  static getStepIndicatorClass(isCompleted: boolean): string {
    const baseClass = 'flex items-center justify-center w-8 h-8 rounded-full';
    const stateClass = isCompleted 
      ? 'bg-[--color-primary-500] text-[--color-text-inverse]' 
      : 'bg-[--color-background-tertiary] text-[--color-text-tertiary]';

    return `${baseClass} ${stateClass}`;
  }

  /**
   * Creates CSS class string for the connector line
   * @param isCompleted - Whether the step is completed
   * @returns CSS class string for the connector line
   */
  static getConnectorClass(isCompleted: boolean): string {
    const baseClass = 'w-full h-1';
    const stateClass = isCompleted 
      ? 'bg-[--color-primary-500]' 
      : 'bg-[--color-background-tertiary]';

    return `${baseClass} ${stateClass}`;
  }

  /**
   * Creates CSS class string for the progress text
   * @returns CSS class string for the progress text
   */
  static getProgressTextClass(): string {
    return 'ml-[--spacing-md] text-sm font-medium text-[--color-text-primary]';
  }
}

