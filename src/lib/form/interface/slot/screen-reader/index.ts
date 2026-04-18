import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotScreenReader extends InteractionHTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: string;
  class?: string;
}
