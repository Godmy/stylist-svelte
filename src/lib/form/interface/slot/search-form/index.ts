import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotSearchForm extends InteractionHTMLAttributes<HTMLFormElement> {
  query?: string;
  placeholder?: string;
  class?: string;
}
