/**
 * @file AnimatedNumber Style Manager
 * @description Style management for AnimatedNumber component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for AnimatedNumber
 */

/**
 * Style manager for AnimatedNumber component
 * Manages all class names and styling for the AnimatedNumber atom
 */
export class AnimatedNumberStyleManager {
  /**
   * Gets the base classes for the AnimatedNumber component
   * @param className - Additional CSS classes to append
   * @returns Combined string of base and additional classes
   */
  static getBaseClasses(className?: string): string {
    const baseClasses = 'animated-number font-mono';
    return className ? `${baseClasses} ${className}` : baseClasses;
  }

  /**
   * Gets the wrapper classes for the AnimatedNumber component
   * @returns String of wrapper classes
   */
  static getWrapperClasses(): string {
    return 'inline-block';
  }
}