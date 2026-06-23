import type { SlotRangeSlider as RangeSliderProps } from '$stylist/input/interface/slot/range-slider';

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
			: (((value as number) - min) / (max - min)) * 100
	);

	const fillStyle = $derived(
		isRange && Array.isArray(value)
			? `left: ${minPercentage}%; width: ${maxPercentage - minPercentage}%`
			: `left: 0%; width: ${maxPercentage}%`
	);

	const containerClass = $derived(['c-range-slider', props.class].filter(Boolean).join(' '));
	const labelContainerClass = 'c-range-slider__header';
	const labelClass = 'c-range-slider__label';
	const valueDisplayClass = 'c-range-slider__value';
	const trackContainerClass = 'c-range-slider__track-wrap';
	const trackClass = 'c-range-slider__track';
	const fillClass = $derived(
		['c-range-slider__fill', disabled ? 'c-range-slider__fill--disabled' : '']
			.filter(Boolean)
			.join(' ')
	);
	const thumbClass = $derived(
		['c-range-slider__thumb', disabled ? 'c-range-slider__thumb--disabled' : '']
			.filter(Boolean)
			.join(' ')
	);
	const minMaxLabelClass = 'c-range-slider__minmax';
	const descriptionClass = 'c-range-slider__description';

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
		get labelContainerClass() {
			return labelContainerClass;
		},
		get labelClass() {
			return labelClass;
		},
		get valueDisplayClass() {
			return valueDisplayClass;
		},
		get trackContainerClass() {
			return trackContainerClass;
		},
		get trackClass() {
			return trackClass;
		},
		get fillClass() {
			return fillClass;
		},
		get thumbClass() {
			return thumbClass;
		},
		get minMaxLabelClass() {
			return minMaxLabelClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get showValue() {
			return props.showValue ?? true;
		},
		get step() {
			return props.step ?? 1;
		},
		get label() {
			return props.label;
		},
		get description() {
			return props.description;
		},
		get id() {
			return props.id;
		}
	};
}

export default createRangeSliderState;
