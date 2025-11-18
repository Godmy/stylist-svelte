import type { HTMLAttributes } from 'svelte/elements';

/**
 * @interface IStepConnectorProps
 * 
 * Defines the interface for StepConnector component properties based on SOLID principles.
 * 
 * Single Responsibility Principle: This interface solely defines the structure of StepConnector component props.
 * Open/Closed Principle: Extended through intersection with HTMLAttributes without modifying existing code.
 * Dependency Inversion: Using abstract HTMLAttributes type for dependency.
 */
export interface IStepConnectorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Status of the step connector
   * @default 'pending'
   */
  status?: 'pending' | 'active' | 'completed' | 'error';
  
  /**
   * Additional CSS classes to apply to the step connector
   */
  class?: string;
}

/**
 * @typedef StepConnectorStatus
 * 
 * Defines allowed step connector statuses
 */
export type StepConnectorStatus = 'pending' | 'active' | 'completed' | 'error';