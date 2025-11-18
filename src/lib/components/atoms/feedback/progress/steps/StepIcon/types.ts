import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IStepIconProps
 * 
 * Defines the interface for StepIcon component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of StepIcon component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IStepIconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Status of the step icon
   * @default 'pending'
   */
  status?: 'pending' | 'active' | 'completed' | 'error';
  
  /**
   * Size of the step icon
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Step number to display when no icon is specified
   */
  stepNumber?: number;
  
  /**
   * Name of the icon to display
   */
  iconName?: string;
  
  /**
   * Additional CSS classes to apply to the step icon
   */
  class?: string;
}

/**
 * @typedef StepIconStatus
 * 
 * Defines allowed step icon statuses
 */
export type StepIconStatus = 'pending' | 'active' | 'completed' | 'error';

/**
 * @typedef StepIconSize
 * 
 * Defines allowed step icon sizes
 */
export type StepIconSize = 'sm' | 'md' | 'lg';