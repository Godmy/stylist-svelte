import { cn } from '$stylist/utils/classes';
import type { SliderProps } from '$stylist/design-system/props';

// Определение состояния для Slider
export function createSliderState(props: SliderProps) {
	const min = props.min ?? 0;
	const max = props.max ?? 100;
	const value = props.value ?? min;

	// Calculate position as percentage
	const position = ((value - min) / (max - min)) * 100;

	const containerClasses = cn(
		'slider-container',
		props.disabled ? 'disabled' : '',
		props.class
	);

	const trackClasses = cn(
		'slider-track',
		'w-full h-2 bg-[var(--color-border-primary)] rounded-full relative'
	);

	const thumbClasses = cn(
		'slider-thumb',
		'absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[var(--color-primary-500)] rounded-full cursor-pointer',
		props.disabled ? 'cursor-not-allowed opacity-50' : ''
	);

	return {
		position,
		containerClasses,
		trackClasses,
		thumbClasses,
		value,
		min,
		max,
		disabled: props.disabled ?? false
	};
}

export default createSliderState;



