import type { PortGroupProps } from '$stylist/science/type/struct/port-group-props';
import type { GraphPortRecipe } from '$stylist/science/interface/recipe/graph-port';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { PortGroupStyleManager } from '$stylist/science/class/style-manager/port-group';

export function createPortGroupState(props: PortGroupProps) {
	const direction = $derived((props.direction === 'output' ? 'output' : 'input') as 'input' | 'output');
	const portSize = $derived((props.portSize ?? 'md') as TokenSize);
	const showLabels = $derived(props.showLabels ?? true);
	const compact = $derived(props.compact ?? false);
	const divider = $derived(props.divider ?? false);
	const hasTitle = $derived(Boolean(props.title));
	const title = $derived(props.title ?? '');
	const ports = $derived(props.ports ?? []);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			direction: _direction,
			ports: _ports,
			portSize: _portSize,
			showLabels: _showLabels,
			showTypeIcons: _showTypeIcons,
			compact: _compact,
			divider: _divider,
			title: _title,
			onPortClick: _onPortClick,
			onConnectionStart: _onConnectionStart,
			onConnectionEnd: _onConnectionEnd,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	const classes = $derived(PortGroupStyleManager.getGroupClasses(direction, compact));

	function handlePortClick(port: GraphPortRecipe, event: MouseEvent) {
		props.onPortClick?.(port.id ?? '', event);
	}

	function handleConnectionStart(port: GraphPortRecipe, event: MouseEvent) {
		props.onConnectionStart?.(port, event);
	}

	function handleConnectionEnd(port: GraphPortRecipe, event: MouseEvent) {
		props.onConnectionEnd?.(port, event);
	}

	return {
		get direction() {
			return direction;
		},
		get portSize() {
			return portSize;
		},
		get showLabels() {
			return showLabels;
		},
		get compact() {
			return compact;
		},
		get divider() {
			return divider;
		},
		get hasTitle() {
			return hasTitle;
		},
		get title() {
			return title;
		},
		get ports() {
			return ports;
		},
		get restProps() {
			return restProps;
		},
		get classes() {
			return classes;
		},
		handlePortClick,
		handleConnectionStart,
		handleConnectionEnd
	};
}

export default createPortGroupState;





