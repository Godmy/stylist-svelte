import type { StackProps } from '$stylist/design-system/props';
import type { Orientation, Justification, StackAlign } from '$stylist/design-system/tokens';
import { StackStyleManager } from '$stylist/design-system/styles';
import { spacing as spacingTokens } from '$stylist/design-system/tokens';

export function createStackState(props: StackProps) {
	const direction = $derived((props.direction ?? 'vertical') as Orientation);
	const spacing = $derived(props.spacing ?? spacingTokens[4]);
	const align = $derived((props.align ?? 'stretch') as StackAlign);
	const justify = $derived((props.justify ?? 'start') as Justification);
	const gap = $derived(StackStyleManager.getStackGap(spacing));
	const classes = $derived(
		StackStyleManager.getStackClasses(direction, align, justify, props.class ?? '')
	);

	return {
		get direction() {
			return direction;
		},
		get spacing() {
			return spacing;
		},
		get align() {
			return align;
		},
		get justify() {
			return justify;
		},
		get gap() {
			return gap;
		},
		get classes() {
			return classes;
		}
	};
}



export default createStackState;



