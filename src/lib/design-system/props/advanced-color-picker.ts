import type { HTMLAttributes } from 'svelte/elements';

export interface AdvancedColorPickerProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  disabled?: boolean;
  showInput?: boolean;
  showPalette?: boolean;
  onInput?: (value: string) => void;
  onChange?: (value: string) => void;
  class?: string;
}
