/**
 * @file ComponentPreview Style Manager
 * @description Style management for ComponentPreview component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 *
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for ComponentPreview
 */

import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from './card';

/**
 * Style manager for ComponentPreview component
 * Manages all class names and styling for the ComponentPreview molecule
 */
export class ComponentPreviewStyleManager {
  /**
   * Gets the base classes for the ComponentPreview component
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(className?: string): string {
    return cn(
      'c-component-preview border border-[var(--color-border-primary)] shadow-sm',
      CARD_BASE_CLASSES,
      className
    );
  }

  /**
   * Gets the header classes for the ComponentPreview component
   * @returns Header classes
   */
  static getHeaderClasses(): string {
    return 'border-b border-[var(--color-border-primary)] px-6 py-4';
  }

  /**
   * Gets the title classes for the ComponentPreview component
   * @returns Title classes
   */
  static getTitleClasses(): string {
    return 'text-lg font-bold text-[var(--color-text-primary)]';
  }

  /**
   * Gets the description classes for the ComponentPreview component
   * @returns Description classes
   */
  static getDescriptionClasses(): string {
    return 'mt-1 text-sm text-[var(--color-text-secondary)]';
  }

  /**
   * Gets the preview container classes for the ComponentPreview component
   * @returns Preview container classes
   */
  static getPreviewContainerClasses(): string {
    return 'border-b border-[var(--color-border-primary)] p-6';
  }

  /**
   * Gets the demo container classes for the ComponentPreview component
   * @returns Demo container classes
   */
  static getDemoContainerClasses(): string {
    return 'flex min-h-[100px] items-center justify-center rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] p-4';
  }

  /**
   * Gets the code container classes for the ComponentPreview component
   * @returns Code container classes
   */
  static getCodeContainerClasses(): string {
    return 'p-0'; // Padding handled by code block
  }

  /**
   * Gets the tab container classes for the ComponentPreview component
   * @returns Tab container classes
   */
  static getTabContainerClasses(): string {
    return 'border-b border-[var(--color-border-primary)]';
  }

  /**
   * Gets the tab list classes for the ComponentPreview component
   * @returns Tab list classes
   */
  static getTabListClasses(): string {
    return 'flex -mb-px';
  }

  /**
   * Gets the tab button classes for the ComponentPreview component
   * @param isActive - Whether the tab is currently active
   * @returns Tab button classes
   */
  static getTabButtonClasses(isActive: boolean): string {
    return cn(
      'rounded-t-lg border-b-2 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2',
      isActive
        ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'
        : 'border-transparent text-[var(--color-text-tertiary)] hover:border-[var(--color-border-primary)] hover:text-[var(--color-text-primary)]'
    );
  }
}



