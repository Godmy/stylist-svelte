import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface SlotDialog extends InteractionHTMLAttributes<HTMLDivElement> {
	open?: boolean;
	title?: string;
	description?: string;
	class?: string;
	onClose?: () => void;
}
