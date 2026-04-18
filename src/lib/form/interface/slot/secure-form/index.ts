import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotSecureForm extends InteractionHTMLAttributes<HTMLFormElement> {
  token?: string;
  class?: string;
}
