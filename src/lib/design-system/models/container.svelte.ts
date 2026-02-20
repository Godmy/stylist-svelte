import type { ContainerProps } from '$stylist/design-system/props/container';
import { LayoutStyleManager } from '$stylist/design-system/styles/layout';

export function createContainerState(props: ContainerProps) {
	const size = $derived(props.size ?? 'full');
	const classes = $derived(LayoutStyleManager.getContainerClasses(size, props.class ?? ''));

	return {
		size,
		classes
	};
}

export default createContainerState;