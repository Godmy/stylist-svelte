import type { SpacerProps } from '$stylist/design-system/contracts';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';
import { clsx } from 'clsx';

export function createSpacerState(props: SpacerProps) {
	const axis = $derived((props.axis ?? 'vertical') as Orientation);
	const sizeValue = $derived(LayoutStyleManager.getSpacerSize(props.size));
	const classes = $derived(LayoutStyleManager.getSpacerClasses(axis, clsx(props.class ?? '')));

	return {
		get axis() {
			return axis;
		},
		get sizeValue() {
			return sizeValue;
		},
		get classes() {
			return classes;
		}
	};
}

export default createSpacerState;



