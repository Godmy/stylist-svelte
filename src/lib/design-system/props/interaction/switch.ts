import type { HTMLAttributes } from 'svelte/elements';

/**
 * Switch Props
 * Used for toggle switch controls
 */
export interface SwitchProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size'> {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Label for the switch */
  label?: string;
  /** Description for the switch */
  description?: string;
  /** Whether the switch is required */
  required?: boolean;
  /** Custom class name */
  class?: string;
  /** Callback when switch changes */
  onChange?: (checked: boolean) => void;
  /** Size of the switch */
  switchSize?: 'sm' | 'md' | 'lg';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}
