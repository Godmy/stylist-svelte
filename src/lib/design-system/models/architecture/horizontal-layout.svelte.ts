import type { HorizontalLayoutProps } from '$stylist/design-system/props/architecture/layout-extended';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';

export function createHorizontalLayoutState(props: HorizontalLayoutProps) {
	const gap = $derived(props.gap ?? 'md');
	const alignItems = $derived(props.alignItems ?? 'center');
	const justifyContent = $derived(props.justifyContent ?? 'start');
	const wrap = $derived(props.wrap ?? true);
	const classes = $derived(
		LayoutStyleManager.getHorizontalLayoutClasses(gap, alignItems, justifyContent, wrap, props.class ?? '')
	);

	return {
		get gap() {
			return gap;
		},
		get alignItems() {
			return alignItems;
		},
		get justifyContent() {
			return justifyContent;
		},
		get wrap() {
			return wrap;
		},
		get classes() {
			return classes;
		}
	};
}

export default createHorizontalLayoutState;
