/**
 * Stack component types and interfaces
 * Following SOLID principles with proper type definitions
 */

/** Direction of the stack layout */
export type StackDirection = 'vertical' | 'horizontal';

/** Alignment of items along the cross axis */
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/** Justification of items along the main axis */
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';

/** Props interface for Stack component */
export interface IStackProps {
  /**
   * Content to be rendered inside the stack
   */
  children?: () => any;
  
  /**
   * Direction of the stack layout (vertical or horizontal)
   * @default 'vertical'
   */
  direction?: StackDirection;
  
  /**
   * Spacing between items in the stack
   * @default '1rem'
   */
  spacing?: string | number;
  
  /**
   * Alignment of items along the cross axis
   * @default 'stretch'
   */
  align?: StackAlign;
  
  /**
   * Justification of items along the main axis
   * @default 'start'
   */
  justify?: StackJustify;
  
  /**
   * Additional CSS classes to apply to the stack
   */
  class?: string;
}