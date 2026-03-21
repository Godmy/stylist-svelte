import type { ContainerProps } from '$stylist/design-system/contracts/architecture/container';
import { LayoutStyleManager } from '$stylist/design-system/styles/architecture/layout';
import { clsx } from 'clsx';

export function createContainerState(props: ContainerProps) {
	const size = $derived(props.size ?? 'full');
	const classes = $derived(LayoutStyleManager.getContainerClasses(size, clsx(props.class ?? '')));

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



