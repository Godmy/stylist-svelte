/**
 * @file ProcessStep Style Manager
 * @description Style management for ProcessStep component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for ProcessStep
 */

/**
 * Style manager for ProcessStep component
 * Manages all class names and styling for the ProcessStep molecule
 */
export class ProcessStepStyleManager {
  /**
   * Gets the base classes for the ProcessStep component
   * @param active - Whether this step is currently active
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(active: boolean = false, className?: string): string {
    const baseClasses = 'process-step flex items-start p-4 rounded-lg border';
    const activeClasses = active 
      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700' 
      : 'border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700';
    const allClasses = `${baseClasses} ${activeClasses}`;
    return className ? `${allClasses} ${className}` : allClasses;
  }

  /**
   * Gets the number container classes for the ProcessStep component
   * @param active - Whether this step is currently active
   * @returns Number container classes
   */
  static getNumberContainerClasses(active: boolean = false): string {
    const baseClasses = 'flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-4';
    const activeClasses = active 
      ? 'bg-blue-500 text-white' 
      : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    return `${baseClasses} ${activeClasses}`;
  }

  /**
   * Gets the content container classes for the ProcessStep component
   * @returns Content container classes
   */
  static getContentContainerClasses(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Gets the title classes for the ProcessStep component
   * @param active - Whether this step is currently active
   * @returns Title classes
   */
  static getTitleClasses(active: boolean = false): string {
    const baseClasses = 'text-base font-bold';
    const activeClasses = active 
      ? 'text-blue-700 dark:text-blue-300' 
      : 'text-gray-900 dark:text-white';
    return `${baseClasses} ${activeClasses}`;
  }

  /**
   * Gets the agent badge classes for the ProcessStep component
   * @returns Agent badge classes
   */
  static getAgentBadgeClasses(): string {
    return 'inline-block ml-2 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded';
  }

  /**
   * Gets the description classes for the ProcessStep component
   * @returns Description classes
   */
  static getDescriptionClasses(): string {
    return 'text-sm text-gray-600 dark:text-gray-300 mt-1';
  }
}