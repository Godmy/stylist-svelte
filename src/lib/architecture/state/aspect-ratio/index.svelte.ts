import type { ArchitectureContractOfT } from '$stylist/architecture/type/contract';
import { LayoutStyleManager } from '$stylist/architecture/class/style-manager/layout';
import { clsx } from 'clsx';

export function createAspectRatioState(props: ArchitectureContractOfT<'AspectRatio'>) {
	const ratio = $derived(props.ratio ?? 1);
	const classes = $derived(LayoutStyleManager.getAspectRatioClasses(clsx(props.class ?? '')));

	return {
		get ratio() {
			return ratio;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAspectRatioState;





