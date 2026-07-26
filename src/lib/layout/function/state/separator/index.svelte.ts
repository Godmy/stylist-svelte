import type { SeparatorProps } from '$stylist/layout/interface/recipe/separator';

export function createSeparatorState(props: SeparatorProps) {
	const orientation = $derived(props.orientation ?? 'horizontal');
	const decorative = $derived(props.decorative ?? false);

	return {
		get orientation() {
			return orientation;
		},
		get decorative() {
			return decorative;
		}
	};
}

export default createSeparatorState;
