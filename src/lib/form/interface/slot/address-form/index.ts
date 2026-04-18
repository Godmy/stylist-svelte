import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotAddressForm extends InteractionHTMLAttributes<HTMLFormElement> {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  class?: string;
}
