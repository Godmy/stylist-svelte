import type { HorizontalLayoutProps } from '$stylist/architecture/interface/layout-extended';
import { LayoutStyleManager } from '$stylist/architecture/class/style-manager/layout';
import { clsx } from 'clsx';

export function createHorizontalLayoutState(props: HorizontalLayoutProps) {
	const gap = $derived(props.gap ?? 'md');
	const alignItems = $derived(props.alignItems ?? 'center');
	const justifyContent = $derived(props.justifyContent ?? 'justify');
	const wrap = $derived(props.wrap ?? true);
	const classes = $derived(
		LayoutStyleManager.getHorizontalLayoutClasses(gap, alignItems, justifyContent, wrap, clsx(props.class ?? ''))
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





