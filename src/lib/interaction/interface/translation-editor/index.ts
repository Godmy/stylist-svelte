import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

export interface TranslationEditorProps extends InteractionHTMLAttributes<HTMLDivElement> {
  sourceText?: string;
  targetLocale?: string;
  class?: string;
}


