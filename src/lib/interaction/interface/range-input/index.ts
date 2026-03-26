import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface RangeInputProps extends InteractionHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  class?: string;
}


