import type { RecipeAnimatedBackground } from '$stylist/animation/interface/recipe/animated-background';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createAnimatedBackgroundState(props: RecipeAnimatedBackground) {
	const particleIndices = Array.from({ length: 12 }, (_, index) => index + 1);
	const children = $derived(props.children);
	const containerClasses = $derived(
		mergeClassNames(
			'c-animated-background',
			'ambient-bg',
			typeof props.class === 'string' ? props.class : undefined
		)
	);

	return {
		get children() {
			return children;
		},
		get containerClasses() {
			return containerClasses;
		},
		get particleIndices() {
			return particleIndices;
		}
	};
}

export default createAnimatedBackgroundState;
