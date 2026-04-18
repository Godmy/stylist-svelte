import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TranslatableText } from '$stylist/input/type/struct/interaction-input/translatable-text';

export interface SlotTranslationEditor extends InteractionHTMLAttributes<HTMLDivElement> {
  sourceText?: string;
  targetLocale?: string;
  class?: string;
}
