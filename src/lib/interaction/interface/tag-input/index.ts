import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface TagInputProps extends InteractionHTMLAttributes<HTMLDivElement> {
  tags?: string[];
  placeholder?: string;
  class?: string;
}


