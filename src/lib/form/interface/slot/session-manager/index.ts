import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotSessionManager extends InteractionHTMLAttributes<HTMLDivElement> {
  activeSessions?: number;
  expiresAt?: string;
  class?: string;
}
