import type { ContainerProps } from '$stylist/design-system/props/architecture/container';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';

export function createContainerState(props: ContainerProps) {
	const size = $derived(props.size ?? 'full');
	const classes = $derived(LayoutStyleManager.getContainerClasses(size, props.class ?? ''));

	return {
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export default createContainerState;
