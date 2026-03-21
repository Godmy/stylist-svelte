import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';

export interface AdvancedColorPickerProps extends InteractionHTMLAttributes<HTMLDivElement> {
  value?: string;
  disabled?: boolean;
  showInput?: boolean;
  showPalette?: boolean;
  onInput?: (value: string) => void;
  onChange?: (value: string) => void;
  class?: string;
}


