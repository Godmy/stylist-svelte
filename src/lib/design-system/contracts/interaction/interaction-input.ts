import type { HTMLAttributes } from 'svelte/elements';
import type { Translation } from '$stylist/design-system/tokens/information/translations';

export interface AutoCompleteOption {
	id: string;
	label: string;
	value: string;
	meta?: string;
}

export interface DateRangeValue {
	start: Date | null;
	end: Date | null;
}

export interface DateTimeRangeValue {
	start: Date | null;
	end: Date | null;
}

export interface ProductForQuote {
	id: string;
	name: string;
	quantity: number;
	unitPrice?: number;
	notes?: string;
}

export interface QuoteRequestValue {
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
}

export interface TranslatableText {
	id: string;
	key: string;
	original: string;
	translations: Record<string, string>;
	context?: string;
	status: Translation;
}

export interface TranslationLocale {
	code: string;
	name: string;
	flag?: string;
}

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
