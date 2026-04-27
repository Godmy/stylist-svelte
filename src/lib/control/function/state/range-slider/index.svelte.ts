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
	const labelContainerClass = $derived('flex justify-between items-center mb-2');
	const labelClass = $derived('text-sm font-medium text-[--color-text-primary]');
	const valueDisplayClass = $derived('text-sm text-[--color-text-secondary]');
	const trackContainerClass = $derived('relative h-2');
	const trackClass = $derived('w-full h-2 bg-[--color-border-secondary] rounded-full');
	const fillClass = $derived(`absolute h-2 bg-[--color-primary-500] rounded-full ${disabled ? 'bg-[--color-border-secondary]' : ''}`);
	const thumbClass = $derived(`w-4 h-4 rounded-full ${disabled ? 'bg-[--color-text-tertiary]' : 'bg-[--color-primary-600]'} cursor-pointer appearance-none absolute top-1/2 -translate-y-1/2`);
	const minMaxLabelClass = $derived('flex justify-between text-xs text-[--color-text-secondary] mt-1');
	const descriptionClass = $derived('text-xs text-[--color-text-secondary] mt-1');

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
		get labelContainerClass() { return labelContainerClass; },
		get labelClass() { return labelClass; },
		get valueDisplayClass() { return valueDisplayClass; },
		get trackContainerClass() { return trackContainerClass; },
		get trackClass() { return trackClass; },
		get fillClass() { return fillClass; },
		get thumbClass() { return thumbClass; },
		get minMaxLabelClass() { return minMaxLabelClass; },
		get descriptionClass() { return descriptionClass; },
		get showValue() { return props.showValue ?? true; },
		get step() { return props.step ?? 1; },
		get label() { return props.label; },
		get description() { return props.description; },
		get id() { return props.id; }
	};
}

export default createRangeSliderState;
