/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { AutoCompleteOption } from './auto-complete-option';
export type { DateRangeValue } from './date-range-value';
export type { DateTimeRangePickerProps } from './date-time-range-picker-props';
export type { DateTimeRangeValue } from './date-time-range-value';
export type { ProductForQuote } from './product-for-quote';
export type { QuoteRequestValue } from './quote-request-value';
export type { TranslatableText } from './translatable-text';
export type { TranslationLocale } from './translation-locale';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { DateRangeValue } from '$stylist/input/type/struct/interaction-input-date-range-value';

export interface DateRangePickerProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'oninput' | 'value'> {
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