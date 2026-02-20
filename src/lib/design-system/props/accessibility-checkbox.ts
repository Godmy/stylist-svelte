import type { HTMLAttributes } from 'svelte/elements';

/**
 * Accessibility Checkbox Props
 * Used for accessibility-related checkbox functionality
 */
export interface AccessibilityCheckboxProps extends HTMLAttributes<HTMLInputElement> {
  /** Label for the checkbox */
  label?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Custom class name */
  class?: string;
  /** Callback when checkbox changes */
  onChange?: (checked: boolean) => void;
}
