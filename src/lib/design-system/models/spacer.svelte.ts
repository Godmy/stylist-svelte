import type { SpacerProps } from '$stylist/design-system/props';
import { LayoutStyleManager } from '$stylist/design-system/styles/layout';

type SpacerAxis = 'horizontal' | 'vertical';

export function createSpacerState(props: SpacerProps) {
	const axis = $derived((props.axis ?? 'vertical') as SpacerAxis);
	const sizeValue = $derived(LayoutStyleManager.getSpacerSize(props.size));
	const classes = $derived(LayoutStyleManager.getSpacerClasses(axis, props.class ?? ''));

	return {
		axis,
		sizeValue,
		classes
	};
}

export default createSpacerState;