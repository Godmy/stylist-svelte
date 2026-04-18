import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotFormWithValidation extends InteractionHTMLAttributes<HTMLFormElement> {
  email?: string;
  password?: string;
  class?: string;
}
