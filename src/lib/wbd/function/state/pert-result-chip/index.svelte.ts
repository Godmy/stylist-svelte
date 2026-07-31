import type { RecipePertResultChip } from '$stylist/wbd/interface/recipe/pert-result-chip';

export function createPertResultChipState(props: RecipePertResultChip) {
	const unit = $derived(props.unit ?? '');
	const expectedLabel = $derived(`${props.result.expected.toFixed(1)}${unit}`);
	const stdDevLabel = $derived(`±${props.result.stdDev.toFixed(1)}${unit}`);
	const className = $derived(props.class ?? '');

	return {
		get expectedLabel() {
			return expectedLabel;
		},
		get stdDevLabel() {
			return stdDevLabel;
		},
		get className() {
			return className;
		}
	};
}

export default createPertResultChipState;
