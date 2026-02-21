/**
 * @file ProcessStep Types
 * @description Type definitions for ProcessStep component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

/**
 * Props interface for ProcessStep component
 * Single Responsibility: Define the contract for ProcessStep component
 */
export interface IProcessStepProps {
  /**
   * Step number for the process
   */
  number: number;

  /**
   * Title of the process step
   */
  title: string;

  /**
   * Description of the process step
   */
  description: string;

  /**
   * Agent responsible for this step (e.g. "Codex", "Qwen")
   * @default undefined
   */
  agent?: string;

  /**
   * Icon name for the process step
   * @default undefined
   */
  icon?: string;

  /**
   * Whether this step is currently active
   * @default false
   */
  active?: boolean;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}