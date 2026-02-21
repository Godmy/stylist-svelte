import type { HTMLAttributes, HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';

// Re-export from source files to avoid duplicates
export type { AutoCompleteProps } from '../information/auto-complete';
export type { AdvancedColorPickerProps } from './advanced-color-picker';
export type { QuoteRequestProps } from '../information/quote-request';
export type { RangeInputProps } from './range-input';
export type { TagInputProps } from './tag-input';
export type { TranslationEditorProps } from './translation-editor';

export type AutoCompleteOption = {
  id: string;
  label: string;
  value: string;
  meta?: string;
};

export type DateRangeValue = {
  start: Date | null;
  end: Date | null;
};

export interface DateRangePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput' | 'value'> {
  value?: DateRangeValue;
  disabled?: boolean;
  placeholder?: string;
  class?: string;
  calendarClass?: string;
  inputClass?: string;
  buttonClass?: string;
  onInput?: (value: DateRangeValue) => void;
  onChange?: (value: DateRangeValue) => void;
}

export type DateTimeRangeValue = {
  start: Date | null;
  end: Date | null;
};

export interface DateTimeRangePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput' | 'value'> {
  value?: DateTimeRangeValue;
  disabled?: boolean;
  placeholder?: string;
  class?: string;
  calendarClass?: string;
  inputClass?: string;
  buttonClass?: string;
  onInput?: (value: DateTimeRangeValue) => void;
  onChange?: (value: DateTimeRangeValue) => void;
}

export type ProductForQuote = {
  id: string;
  name: string;
  quantity: number;
  unitPrice?: number;
  notes?: string;
};

export type QuoteRequestValue = {
  requesterName: string;
  requesterEmail: string;
  requesterPhone?: string;
  companyName?: string;
  companyAddress?: string;
  shippingAddress?: string;
  products: ProductForQuote[];
  message: string;
  urgent?: boolean;
  validUntil?: Date;
};

export type TranslationStatus = 'translated' | 'needs-review' | 'untranslated';

export type TranslatableText = {
  id: string;
  key: string;
  original: string;
  translations: Record<string, string>;
  context?: string;
  status: TranslationStatus;
};

export type TranslationLocale = {
  code: string;
  name: string;
  flag?: string;
};


