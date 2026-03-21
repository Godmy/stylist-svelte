import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';

export interface TranslationEditorProps extends InteractionHTMLAttributes<HTMLDivElement> {
  sourceText?: string;
  targetLocale?: string;
  class?: string;
}


