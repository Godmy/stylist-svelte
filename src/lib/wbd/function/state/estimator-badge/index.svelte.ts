import type { RecipeEstimatorBadge } from '$stylist/wbd/interface/recipe/estimator-badge';

export function createEstimatorBadgeState(props: RecipeEstimatorBadge) {
	const initials = $derived(
		props.participant.displayName
			.split(' ')
			.map((part) => part.charAt(0).toUpperCase())
			.slice(0, 2)
			.join('')
	);
	const className = $derived(props.class ?? '');

	return {
		get participant() {
			return props.participant;
		},
		get initials() {
			return initials;
		},
		get className() {
			return className;
		}
	};
}

export default createEstimatorBadgeState;
