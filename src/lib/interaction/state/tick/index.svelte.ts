import { mergeClasses } from '$stylist/information/function/classes';
import { cn } from '$stylist/information/function/classes';
import type { SliderTickProps } from '$stylist/information/interface/interaction';

// Определение состояния для Slider Tick
export function createSliderTickState(props: SliderTickProps) {
	const value = props.value ?? 0;
	const position = props.position ?? 0;
	const active = props.active ?? false;
	const label = props.label;

	const containerClasses = mergeClasses(
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





