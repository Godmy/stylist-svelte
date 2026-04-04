import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { SliderRecipe as SliderProps } from '$stylist/information/interface/recipe/slider';

type SliderStateProps = SliderProps & {
	min?: number;
	max?: number;
	value?: number;
	disabled?: boolean;
	class?: string | null;
};

// Определение состояния для Slider
export function createSliderState(props: SliderStateProps) {
	const min = props.min ?? 0;
	const max = props.max ?? 100;
	const value = props.value ?? min;

	// Calculate position as percentage
	const position = ((value - min) / (max - min)) * 100;

	const containerClasses = mergeClasses(
		'slider-container',
		props.disabled ? 'disabled' : '',
		props.class ?? ''
	);

	const trackClasses = mergeClasses(
		'slider-track',
		'w-full h-2 bg-[var(--color-border-primary)] rounded-full relative'
	);

	const thumbClasses = mergeClasses(
		'slider-thumb',
		'absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[var(--color-primary-500)] rounded-full cursor-pointer',
		props.disabled ? 'cursor-not-allowed opacity-[var(--opacity-50)]' : ''
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






