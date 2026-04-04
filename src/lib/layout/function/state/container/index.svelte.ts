import { LayoutStyleManager } from '$stylist/layout/class/style-manager/layout';
import type { ContainerProps } from '$stylist/layout/type/struct/container/container-props';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export function createContainerState(props: ContainerProps) {
	const size = $derived<TokenSize>(props.size ?? 'full');
	const classes = $derived(LayoutStyleManager.getContainerClasses(size, props.class ?? ''));
	const restProps = $derived.by(() => {
		const { class: _class, size: _size, children: _children, ...rest } = props;
		return rest;
	});

	return {
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createContainerState;


