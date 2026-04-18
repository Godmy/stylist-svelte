import type { SideBySideLayoutProps } from '$stylist/navigation/type/struct/side-by-side-layout-props';
import { SIDE_BY_SIDE_ALIGN_CLASSES } from '$stylist/navigation/const/record/side-by-side-align-classes';
import { SIDE_BY_SIDE_GAP_CLASSES } from '$stylist/navigation/const/record/side-by-side-gap-classes';
import { SIDE_BY_SIDE_JUSTIFY_CLASSES } from '$stylist/navigation/const/record/side-by-side-justify-classes';

export function getSideBySideLayoutClasses(props: SideBySideLayoutProps) {
	const gapClass = SIDE_BY_SIDE_GAP_CLASSES[props.gap ?? 'md'];
	const alignItemsClass = SIDE_BY_SIDE_ALIGN_CLASSES[props.alignItems ?? 'stretch'];
	const justifyContentClass = SIDE_BY_SIDE_JUSTIFY_CLASSES[props.justifyContent ?? 'start'];
	const responsiveClass = props.responsive ?? true ? 'flex-col md:flex-row' : 'flex-row';

	return `flex ${responsiveClass} ${alignItemsClass} ${justifyContentClass} ${gapClass} ${props.class ?? ''}`;
}
