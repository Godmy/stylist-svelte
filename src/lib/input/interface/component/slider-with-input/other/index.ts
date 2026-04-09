import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface ISliderWithInputProps extends InteractionHTMLAttributes<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	showInput?: boolean;
	inputWidth?: string;
	class?: string;
	sliderClass?: string;
	inputClass?: string;
	onValueInput?: (value: number) => void;
	onValueChange?: (value: number) => void;
	onInput?: (value: number) => void;
	onChange?: (value: number) => void;
}
