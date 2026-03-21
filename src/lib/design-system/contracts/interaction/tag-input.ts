import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';

export interface TagInputProps extends InteractionHTMLAttributes<HTMLDivElement> {
  tags?: string[];
  placeholder?: string;
  class?: string;
}


