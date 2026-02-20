import type { HorizontalLayoutProps } from '$stylist/design-system/props/layout-extended';
import { LayoutStyleManager } from '$stylist/design-system/styles/layout';

export function createHorizontalLayoutState(props: HorizontalLayoutProps) {
	const gap = $derived(props.gap ?? 'md');
	const alignItems = $derived(props.alignItems ?? 'center');
	const justifyContent = $derived(props.justifyContent ?? 'start');
	const wrap = $derived(props.wrap ?? true);
	const classes = $derived(
		LayoutStyleManager.getHorizontalLayoutClasses(gap, alignItems, justifyContent, wrap, props.class ?? '')
	);

	return {
		gap,
		alignItems,
		justifyContent,
		wrap,
		classes
	};
}

export default createHorizontalLayoutState;