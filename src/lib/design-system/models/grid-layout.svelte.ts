import type { GridLayoutExtendedProps } from '$stylist/design-system/props/layout-extended';
import { LayoutStyleManager } from '$stylist/design-system/styles/layout';

export function createGridLayoutState(props: GridLayoutExtendedProps) {
	const cols = $derived(props.cols ?? 2);
	const gap = $derived(props.gap ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived(props.alignItems ?? 'stretch');
	const justifyContent = $derived(props.justifyContent ?? 'start');
	const containerClass = $derived(LayoutStyleManager.getGridLayoutContainerClass(props.class ?? ''));

	return {
		cols,
		gap,
		responsive,
		alignItems,
		justifyContent,
		containerClass
	};
}

export default createGridLayoutState;