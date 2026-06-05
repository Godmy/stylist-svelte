import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface SlotSearchForm extends InteractionHTMLAttributes<HTMLFormElement> {
	query?: string;
	placeholder?: string;
	class?: string;
}
