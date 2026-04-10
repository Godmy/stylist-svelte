import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type ToggleWithDescriptionProps = {
	checked?: boolean;
	disabled?: boolean;
	label: string;
	description: string;
	class?: string;
	toggleClass?: string;
	labelClass?: string;
	descriptionClass?: string;
	onValueInput?: (checked: boolean) => void;
	onValueChange?: (checked: boolean) => void;
	onInput?: (checked: boolean) => void;
	onChange?: (checked: boolean) => void;
} & InteractionHTMLAttributes<HTMLDivElement>;
