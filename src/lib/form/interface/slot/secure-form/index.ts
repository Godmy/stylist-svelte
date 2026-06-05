import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface SlotSecureForm extends InteractionHTMLAttributes<HTMLFormElement> {
	token?: string;
	class?: string;
}
