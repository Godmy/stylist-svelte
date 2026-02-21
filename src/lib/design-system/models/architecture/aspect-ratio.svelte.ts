import type { AspectRatioProps } from '$stylist/design-system/props';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';

export function createAspectRatioState(props: AspectRatioProps) {
	const ratio = $derived(props.ratio ?? 1);
	const classes = $derived(LayoutStyleManager.getAspectRatioClasses(props.class ?? ''));

	return {
		get ratio() {
			return ratio;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAspectRatioState;
