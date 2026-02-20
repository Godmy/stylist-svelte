import type { HTMLAttributes } from 'svelte/elements';

export interface TranslationEditorProps extends HTMLAttributes<HTMLDivElement> {
  sourceText?: string;
  targetLocale?: string;
  class?: string;
}
