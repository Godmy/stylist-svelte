import type { AspectRatioProps } from '$stylist/design-system/props';
import { LayoutStyleManager } from '$stylist/design-system/styles/layout';

export function createAspectRatioState(props: AspectRatioProps) {
	const ratio = $derived(props.ratio ?? 1);
	const classes = $derived(LayoutStyleManager.getAspectRatioClasses(props.class ?? ''));

	return {
		ratio,
		classes
	};
}

export default createAspectRatioState;