import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface SlotFormWithValidation extends InteractionHTMLAttributes<HTMLFormElement> {
	email?: string;
	password?: string;
	class?: string;
}
