import type { RecipeEstimateInputRow } from '$stylist/wbd/interface/recipe/estimate-input-row';
import type { StructWbdEstimate } from '$stylist/wbd/type/struct/estimate';

export function createEstimateInputRowState(props: RecipeEstimateInputRow) {
	const className = $derived(props.class ?? '');

	function handleSubmit(estimate: StructWbdEstimate): void {
		props.onSubmit?.(estimate);
	}

	return {
		get task() {
			return props.task;
		},
		get value() {
			return props.value;
		},
		get submitted() {
			return props.submitted ?? false;
		},
		get className() {
			return className;
		},
		handleSubmit
	};
}

export default createEstimateInputRowState;
