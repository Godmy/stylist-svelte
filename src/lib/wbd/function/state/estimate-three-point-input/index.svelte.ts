import type { RecipeEstimateThreePointInput } from '$stylist/wbd/interface/recipe/estimate-three-point-input';
import { validateWbdEstimate } from '$stylist/wbd/function/check/validate-estimate';

export function createEstimateThreePointInputState(props: RecipeEstimateThreePointInput) {
	let optimistic = $state(props.value?.optimistic ?? 0);
	let mostLikely = $state(props.value?.mostLikely ?? 0);
	let pessimistic = $state(props.value?.pessimistic ?? 0);

	const isValid = $derived(validateWbdEstimate({ optimistic, mostLikely, pessimistic }));
	const className = $derived(props.class ?? '');

	function commit(): void {
		if (isValid) {
			props.onSubmit?.({ optimistic, mostLikely, pessimistic });
		}
	}

	return {
		get optimistic() {
			return optimistic;
		},
		set optimistic(value: number) {
			optimistic = value;
			commit();
		},
		get mostLikely() {
			return mostLikely;
		},
		set mostLikely(value: number) {
			mostLikely = value;
			commit();
		},
		get pessimistic() {
			return pessimistic;
		},
		set pessimistic(value: number) {
			pessimistic = value;
			commit();
		},
		get isValid() {
			return isValid;
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get className() {
			return className;
		}
	};
}

export default createEstimateThreePointInputState;
