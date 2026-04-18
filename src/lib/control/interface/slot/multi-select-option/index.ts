import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotMultiSelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}
