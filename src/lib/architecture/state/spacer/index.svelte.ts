import type { SpacerProps } from '$stylist';
import { LayoutStyleManager } from '$stylist/architecture/class/style-manager/layout';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import { clsx } from 'clsx';

export function createSpacerState(props: SpacerProps) {
	const axis = $derived((props.axis ?? 'vertical') as TokenOrientation);
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




