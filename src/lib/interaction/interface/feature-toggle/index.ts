import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface FeatureToggleProps extends InteractionHTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  class?: string;
  onChange?: (value: boolean) => void;
}


