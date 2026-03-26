import type { GridLayoutProps } from '$stylist/architecture/interface/layout';
import { LayoutStyleManager } from '$stylist/architecture/class/style-manager/layout';
import { clsx } from 'clsx';

export function createGridLayoutState(props: GridLayoutProps) {
	const cols = $derived(props.cols ?? 2);
	const gap = $derived(props.gap ?? 'md');
	const responsive = $derived(props.responsive ?? true);
	const alignItems = $derived(props.alignItems ?? 'center');
	const justifyContent = $derived(props.justifyContent ?? 'justify');
	const containerClass = $derived(LayoutStyleManager.getGridLayoutContainerClass(clsx(props.class ?? '')));

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





