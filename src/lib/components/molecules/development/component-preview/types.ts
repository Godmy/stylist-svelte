/**
 * @file ComponentPreview Types
 * @description Type definitions for ComponentPreview component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

// Define Snippet type for Svelte 5
import type { Snippet } from 'svelte';

/**
 * Props interface for ComponentPreview component
 * Single Responsibility: Define the contract for ComponentPreview component
 */
export interface IComponentPreviewProps {
  /**
   * Title of the component
   */
  title: string;

  /**
   * Description of the component
   * @default undefined
   */
  description?: string;

  /**
   * Code snippet to display
   */
  code: string;

  /**
   * Programming language for syntax highlighting
   * @default 'svelte'
   */
  language?: string;

  /**
   * Component demo snippet
   */
  componentDemo: Snippet;

  /**
   * Whether to show the code by default
   * @default false
   */
  showCode?: boolean;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}