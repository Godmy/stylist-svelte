import { ContainerQueryStyleManager } from '$stylist/layout/class/style-manager/container-query';
import type { ContainerQueryType } from '$stylist/layout/type/enum/container-query-type';
import type { ContainerQueryProps } from '$stylist/layout/type/struct/layout-extended/container-query-props';


export function createContainerQueryState(props: ContainerQueryProps) {
	const containerType = $derived<ContainerQueryType>(props.containerType ?? 'inline-size');
	const containerName = $derived(props.containerName);

	const classes = $derived(ContainerQueryStyleManager.getHostClass(props.class));
	const containerStyle = $derived(
		ContainerQueryStyleManager.getContainerStyle(containerType, containerName)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			containerType: _containerType,
			containerName: _containerName,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	return {
		get containerType() { return containerType; },
		get containerName() { return containerName; },
		get classes() { return classes; },
		get containerStyle() { return containerStyle; },
		get restProps() { return restProps; }
	};
}

export default createContainerQueryState;
