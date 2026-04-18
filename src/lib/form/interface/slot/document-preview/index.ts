import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotDocumentPreview extends InteractionHTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: string;
  format?: 'text' | 'json' | 'markdown';
  class?: string;
}
