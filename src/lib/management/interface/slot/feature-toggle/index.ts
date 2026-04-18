import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotFeatureToggle extends InteractionHTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  class?: string;
  onChange?: (value: boolean) => void;
}
