import type { HTMLAttributes } from 'svelte/elements';

export interface FeatureToggleProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  class?: string;
  onChange?: (value: boolean) => void;
}
