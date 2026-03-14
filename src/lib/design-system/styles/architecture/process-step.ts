/**
 * @file ProcessStep Style Manager
 * @description Style management for ProcessStep component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for ProcessStep
 */

import { cn } from '../../utils/cn/index';

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
    return cn(
      'process-step flex items-start rounded-lg border p-4 transition-colors',
      active
        ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
        : 'border-[var(--color-border-primary)] bg-[var(--color-background-primary)]',
      className
    );
  }

  /**
   * Gets the number container classes for the ProcessStep component
   * @param active - Whether this step is currently active
   * @returns Number container classes
   */
  static getNumberContainerClasses(active: boolean = false): string {
    return cn(
      'mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold',
      active
        ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
        : 'bg-[var(--color-neutral-200)] text-[var(--color-text-primary)]'
    );
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
    return cn(
      'text-base font-bold',
      active ? 'text-[var(--color-primary-700)]' : 'text-[var(--color-text-primary)]'
    );
  }

  /**
   * Gets the agent badge classes for the ProcessStep component
   * @returns Agent badge classes
   */
  static getAgentBadgeClasses(): string {
    return 'ml-2 inline-block rounded bg-[var(--color-neutral-100)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-secondary)]';
  }

  /**
   * Gets the description classes for the ProcessStep component
   * @returns Description classes
   */
  static getDescriptionClasses(): string {
    return 'mt-1 text-sm text-[var(--color-text-secondary)]';
  }
}



