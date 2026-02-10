import type {
	StackAlign,
	StackDirection,
	StackJustify,
	StackProps
} from '$stylist/design-system/attributes';
import { ARCHITECTURE_PRESETS } from '$stylist/design-system/presets';
import { spacing as spacingTokens } from '$stylist/design-system/tokens';

const { getStackClasses, getStackGap } = ARCHITECTURE_PRESETS.development;

export function createStackState(props: StackProps) {
	const direction = $derived((props.direction ?? 'vertical') as StackDirection);
	const spacing = $derived(props.spacing ?? spacingTokens[4]);
	const align = $derived((props.align ?? 'stretch') as StackAlign);
	const justify = $derived((props.justify ?? 'start') as StackJustify);
	const gap = $derived(getStackGap(spacing));
	const classes = $derived(getStackClasses(direction, align, justify, props.class ?? ''));

	return {
		direction,
		spacing,
		align,
		justify,
		gap,
		classes
	};
}
