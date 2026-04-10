import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TranslatableText } from '$stylist/input/type/struct/interaction-input/translatable-text';

export interface TranslationEditorProps extends InteractionHTMLAttributes<HTMLDivElement> {
  sourceText?: string;
  targetLocale?: string;
  class?: string;
}

export interface ExtendedTranslationEditorProps extends InteractionHTMLAttributes<HTMLDivElement> {
  texts?: TranslatableText[];
  locales?: string[];
  defaultLocale?: string;
  currentLocale?: string;
  class?: string;
  headerClass?: string;
  tableClass?: string;
  rowClass?: string;
  editorClass?: string;
  showKeyColumn?: boolean;
  showContextColumn?: boolean;
  showStatusColumn?: boolean;
  onTranslationChange?: (key: string, locale: string, value: string) => void;
  onSave?: () => void;
  onImport?: (data: any) => void;
  onExport?: () => void;
}


