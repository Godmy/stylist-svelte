import type { GridLayoutExtendedProps } from '$stylist/design-system/props/architecture/layout-extended';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';

export function createGridLayoutState(props: GridLayoutExtendedProps) {
	const cols = $derived(props.cols ?? 2);
	const gap = $derived(props.gap ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived(props.alignItems ?? 'stretch');
	const justifyContent = $derived(props.justifyContent ?? 'start');
	const containerClass = $derived(LayoutStyleManager.getGridLayoutContainerClass(props.class ?? ''));

	return {
		get cols() {
			return cols;
		},
		get gap() {
			return gap;
		},
		get responsive() {
			return responsive;
		},
		get alignItems() {
			return alignItems;
		},
		get justifyContent() {
			return justifyContent;
		},
		get containerClass() {
			return containerClass;
		}
	};
}

export default createGridLayoutState;
