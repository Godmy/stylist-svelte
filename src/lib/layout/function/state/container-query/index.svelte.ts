import type { ContainerQueryType } from '$stylist/layout/type/alias/container-query-type';
import type { ContainerQueryProps } from '$stylist/layout/type/struct/layout-extended/container-query-props';

export function createContainerQueryState(props: ContainerQueryProps) {
	const containerType = $derived<ContainerQueryType>(props.containerType ?? 'inline-size');
	const containerName = $derived(props.containerName);

	const containerStyle = $derived.by(() => {
		const parts = [`container-type: ${containerType}`];
		if (containerName) parts.push(`container-name: ${containerName}`);
		return parts.join('; ');
	});

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
		get containerType() {
			return containerType;
		},
		get containerName() {
			return containerName;
		},
		get containerStyle() {
			return containerStyle;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createContainerQueryState;

