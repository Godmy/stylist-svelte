import type { SpacerProps } from '$stylist/design-system/contracts';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';
import type { SpacerAxis } from '$stylist/design-system/tokens/architecture/spacer-axis';

export function createSpacerState(props: SpacerProps) {
	const axis = $derived((props.axis ?? 'vertical') as SpacerAxis);
	const sizeValue = $derived(LayoutStyleManager.getSpacerSize(props.size));
	const classes = $derived(LayoutStyleManager.getSpacerClasses(axis, props.class ?? ''));

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
