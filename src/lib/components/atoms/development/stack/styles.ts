/**
 * Style manager for Stack component
 * Following SOLID principles by separating styling logic from component logic
 * Uses the Stylist-Svelte theming system with CSS variables
 */

import type { StackDirection, StackAlign, StackJustify } from "./types";

export class StackStyleManager {
  /**
   * Gets the CSS classes for the stack direction
   */
  static getDirectionClasses(direction: StackDirection): string {
    const directionClasses: Record<StackDirection, string> = {
      vertical: 'flex-col',
      horizontal: 'flex-row'
    };

    return directionClasses[direction] || directionClasses.vertical;
  }

  /**
   * Gets the CSS classes for the stack alignment
   */
  static getAlignClasses(align: StackAlign): string {
    const alignClasses: Record<StackAlign, string> = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline'
    };

    return alignClasses[align] || alignClasses.stretch;
  }

  /**
   * Gets the CSS classes for the stack justification
   */
  static getJustifyClasses(justify: StackJustify): string {
    const justifyClasses: Record<StackJustify, string> = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around'
    };

    return justifyClasses[justify] || justifyClasses.start;
  }

  /**
   * Gets the combined CSS classes for the stack component
   */
  static getAllClasses(
    direction: StackDirection,
    align: StackAlign,
    justify: StackJustify,
    baseClass: string = ''
  ): string {
    const classes = [
      'flex',
      this.getDirectionClasses(direction),
      this.getAlignClasses(align),
      this.getJustifyClasses(justify),
      baseClass
    ].filter(Boolean); // Remove falsy values
    
    return classes.join(' ');
  }

  /**
   * Gets the gap value for the stack
   */
  static getGapValue(spacing: string | number): string {
    return typeof spacing === 'number' ? `${spacing}px` : spacing;
  }
}