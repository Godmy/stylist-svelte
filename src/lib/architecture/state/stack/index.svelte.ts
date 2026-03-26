import type { StackProps } from '$stylist';
import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import type { TokenJustification } from '$stylist/architecture/type/token/justification';
import { StackStyleManager } from '$stylist';
import { clsx } from 'clsx';

export function createStackState(props: StackProps) {
	const direction = $derived((props.direction ?? 'vertical') as TokenOrientation);
	const spacing = $derived(props.spacing ?? '1rem');
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




