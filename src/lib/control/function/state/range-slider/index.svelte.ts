import type { RangeSliderProps } from '$stylist/control/type/struct/range-slider-props';

export function createRangeSliderState(props: RangeSliderProps) {
	const isRange = $derived(props.range ?? false);
	const value = $derived(props.value ?? 0);
	const min = $derived(props.min ?? 0);
	const max = $derived(props.max ?? 100);
	const disabled = $derived(props.disabled ?? false);

	const minPercentage = $derived(
		isRange && Array.isArray(value) ? ((value[0] - min) / (max - min)) * 100 : 0
	);

	const maxPercentage = $derived(
		isRange && Array.isArray(value)
			? ((value[1] - min) / (max - min)) * 100
			: ((value as number) - min) / (max - min) * 100
	);

	const fillStyle = $derived(
		isRange && Array.isArray(value)
			? `left: ${minPercentage}%; width: ${maxPercentage - minPercentage}%`
			: `left: 0%; width: ${maxPercentage}%`
	);

	const containerClass = $derived(`mb-4 ${props.class ?? ''}`);
	const labelContainerClass = 'flex justify-between items-center mb-2';
	const labelClass = 'text-sm font-medium text-[--color-text-primary]';
	const valueDisplayClass = 'text-sm text-[--color-text-secondary]';
	const trackContainerClass = 'relative h-2';
	const trackClass = 'w-full h-2 bg-[--color-border-secondary] rounded-full';
	const fillClass = `absolute h-2 bg-[--color-primary-500] rounded-full ${disabled ? 'bg-[--color-border-secondary]' : ''}`;
	const thumbClass = `w-4 h-4 rounded-full ${disabled ? 'bg-[--color-text-tertiary]' : 'bg-[--color-primary-600]'} cursor-pointer appearance-none absolute top-1/2 -translate-y-1/2`;
	const minMaxLabelClass = 'flex justify-between text-xs text-[--color-text-secondary] mt-1';
	const descriptionClass = 'text-xs text-[--color-text-secondary] mt-1';

	return {
		get isRange() {
			return isRange;
		},
		get value() {
			return value;
		},
		get min() {
			return min;
		},
		get max() {
			return max;
		},
		get disabled() {
			return disabled;
		},
		get minPercentage() {
			return minPercentage;
		},
		get maxPercentage() {
			return maxPercentage;
		},
		get fillStyle() {
			return fillStyle;
		},
		get containerClass() {
			return containerClass;
		},
		labelContainerClass,
		labelClass,
		valueDisplayClass,
		trackContainerClass,
		trackClass,
		fillClass,
		thumbClass,
		minMaxLabelClass,
		descriptionClass,
		showValue: props.showValue ?? true,
		step: props.step ?? 1,
		label: props.label,
		description: props.description,
		id: props.id
	};
}

export default createRangeSliderState;
