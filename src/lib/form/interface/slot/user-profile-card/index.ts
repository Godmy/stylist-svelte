import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotUserProfileCard extends InteractionHTMLAttributes<HTMLDivElement> {
  name?: string;
  role?: string;
  email?: string;
  class?: string;
}
