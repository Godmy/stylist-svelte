import type { RangeInputProps } from '$stylist/input/interface/component/range-input/other';

export const createRangeInputState = (props: RangeInputProps) => {
	let minVal = $state(props.minValue ?? props.min ?? 0);
	let maxVal = $state(props.maxValue ?? props.max ?? 100);

	function update(kind: 'min' | 'max', value: number) {
		if (kind === 'min') minVal = Math.min(Math.max(value, props.min ?? 0), maxVal);
		if (kind === 'max') maxVal = Math.max(Math.min(value, props.max ?? 100), minVal);
		props.onInput?.({ min: minVal, max: maxVal });
	}

	function commit() {
		props.onChange?.({ min: minVal, max: maxVal });
	}

	return {
		get min() {
			return props.min ?? 0;
		},
		get max() {
			return props.max ?? 100;
		},
		get step() {
			return props.step ?? 1;
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get showInputFields() {
			return props.showInputFields ?? true;
		},
		get className() {
			return props.class ?? '';
		},
		get rangeClass() {
			return props.rangeClass ?? '';
		},
		get inputClass() {
			return props.inputClass ?? '';
		},
		get minVal() {
			return minVal;
		},
		set minVal(value: number) {
			minVal = value;
		},
		get maxVal() {
			return maxVal;
		},
		set maxVal(value: number) {
			maxVal = value;
		},
		update,
		commit
	};
};

export default createRangeInputState;
