import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotAccountSettingsForm extends InteractionHTMLAttributes<HTMLFormElement> {
  name?: string;
  email?: string;
  locale?: string;
  class?: string;
}
