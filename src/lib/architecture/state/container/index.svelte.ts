import type { ArchitectureContractOfT } from '$stylist/architecture/type/contract';
import { LayoutStyleManager } from '$stylist/architecture/class/style-manager/layout';
import { clsx } from 'clsx';

export function createContainerState(props: ArchitectureContractOfT<'Container'>) {
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





