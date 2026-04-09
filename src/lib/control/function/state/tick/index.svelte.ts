import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
type SliderTickProps = {
	value?: number;
	position?: number;
	active?: boolean;
	label?: string;
	class?: string;
};

// Определение состояния для Slider Tick
export function createSliderTickState(props: SliderTickProps) {
	const value = props.value ?? 0;
	const position = props.position ?? 0;
	const active = props.active ?? false;
	const label = props.label;

	const containerClasses = joinClassNames(
		'slider-tick',
		'absolute bottom-0 transform -translate-x-1/2',
		active ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)]',
		props.class
	);

	return {
		value,
		position,
		active,
		label,
		containerClasses
	};
}

export default createSliderTickState;






