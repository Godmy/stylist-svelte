import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotLoginForm extends InteractionHTMLAttributes<HTMLFormElement> {
  email?: string;
  rememberMe?: boolean;
  class?: string;
}
