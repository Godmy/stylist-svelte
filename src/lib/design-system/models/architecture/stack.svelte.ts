import type { StackProps } from '$stylist/design-system/contracts';
import type { TokenAlignment, TokenOrientation, TokenJustification } from '$stylist/design-system/tokens';
import { StackStyleManager } from '$stylist/design-system/styles';
import { Size } from '$stylist/design-system/tokens/theme/size';
import { clsx } from 'clsx';

export function createStackState(props: StackProps) {
	const direction = $derived((props.direction ?? 'vertical') as TokenOrientation);
	const spacing = $derived(props.spacing ?? Size['4']);
	const align = $derived((props.align ?? 'center') as TokenAlignment);
	const justify = $derived((props.justify ?? 'justify') as TokenJustification);
	const gap = $derived(StackStyleManager.getStackGap(spacing));
	const classes = $derived(
		StackStyleManager.getStackClasses(direction, align, justify, clsx(props.class ?? ''))
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






