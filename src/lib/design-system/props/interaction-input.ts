import type { HTMLAttributes, HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';

export type AutoCompleteOption = {
  id: string;
  label: string;
  value: string;
  meta?: string;
};

export interface AutoCompleteProps extends Omit<HTMLInputAttributes, 'oninput' | 'value'> {
  options: AutoCompleteOption[];
  value?: string;
  placeholder?: string;
  class?: string;
  inputClass?: string;
  listClass?: string;
  itemClass?: string;
  selectedClass?: string;
  debounce?: number;
  showAllSuggestions?: boolean;
  onInput?: (value: string, event?: Event) => void;
  onSelect?: (option: AutoCompleteOption) => void;
}

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

export interface AdvancedColorPickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput' | 'onchange'> {
  value?: string;
  disabled?: boolean;
  showInput?: boolean;
  showPalette?: boolean;
  class?: string;
  onInput?: (value: string) => void;
  onChange?: (value: string) => void;
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

export interface QuoteRequestProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput'> {
  title?: string;
  description?: string;
  class?: string;
  formClass?: string;
  sectionClass?: string;
  inputClass?: string;
  buttonClass?: string;
  showCompanyFields?: boolean;
  showShippingFields?: boolean;
  showUrgentOption?: boolean;
  showValidUntil?: boolean;
  onSubmit?: (request: QuoteRequestValue) => void;
  onCancel?: () => void;
}

export interface RangeInputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput'> {
  min?: number;
  max?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  disabled?: boolean;
  showInputFields?: boolean;
  class?: string;
  rangeClass?: string;
  inputClass?: string;
  onInput?: (values: { min: number; max: number }) => void;
  onChange?: (values: { min: number; max: number }) => void;
}

export interface TagInputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput'> {
  tags?: string[];
  placeholder?: string;
  disabled?: boolean;
  maxTags?: number;
  delimiter?: string;
  validator?: (tag: string) => boolean;
  class?: string;
  inputClass?: string;
  tagClass?: string;
  removeButtonClass?: string;
  onInput?: (tags: string[]) => void;
  onChange?: (tags: string[]) => void;
}

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

export interface TranslationEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'oninput'> {
  texts: TranslatableText[];
  locales: TranslationLocale[];
  defaultLocale?: string;
  currentLocale: string;
  class?: string;
  headerClass?: string;
  tableClass?: string;
  rowClass?: string;
  editorClass?: string;
  showKeyColumn?: boolean;
  showContextColumn?: boolean;
  showStatusColumn?: boolean;
  onTranslationChange?: (key: string, locale: string, translation: string) => void;
  onSave?: (texts: TranslatableText[]) => void;
  onImport?: (data: unknown) => void;
  onExport?: () => void;
}


