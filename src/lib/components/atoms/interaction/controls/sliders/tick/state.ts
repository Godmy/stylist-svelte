import { cn } from '$stylist/utils/classes';
import type { SliderTickProps } from '$stylist/design-system/props';

// Определение состояния для Slider Tick
export function createSliderTickState(props: SliderTickProps) {
	const value = props.value ?? 0;
	const position = props.position ?? 0;
	const active = props.active ?? false;
	const label = props.label;

	const containerClasses = cn(
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