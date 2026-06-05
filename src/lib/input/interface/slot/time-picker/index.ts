import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface SlotTimePicker extends InteractionHTMLAttributes<HTMLInputElement> {
	value?: string;
	disabled?: boolean;
	class?: string;
	dropdownClass?: string;
	showSeconds?: boolean;
	onValueInput?: (time: string) => void;
	onValueChange?: (time: string) => void;
	onChange?: (time: string) => void;
}
