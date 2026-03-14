import type { GraphPortProps } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import { GRAPH_PORT_COLORS } from '$stylist/design-system/tokens';
import { GraphPortStyleManager } from '$stylist/design-system/styles';

export function createGraphPortState(props: GraphPortProps) {
	const direction = $derived(props.direction);
	const size = $derived((props.size ?? 'md') as ComponentSize);
	const dataType = $derived(props.dataType ?? 'any');
	const connected = $derived(Boolean(props.connected));
	const active = $derived(Boolean(props.active));
	const color = $derived(props.color ?? GRAPH_PORT_COLORS[dataType as keyof typeof GRAPH_PORT_COLORS]);

	const sizeClasses = $derived(GraphPortStyleManager.getPortSizeClasses(size));
	const stateClasses = $derived(
		GraphPortStyleManager.getPortStateClasses({
			connected,
			active,
			hovered: false
		})
	);
	const styles = $derived(GraphPortStyleManager.getPortStyles(color, direction));

	return {
		get direction() {
			return direction;
		},
		get size() {
			return size;
		},
		get dataType() {
			return dataType;
		},
		get connected() {
			return connected;
		},
		get active() {
			return active;
		},
		get color() {
			return color;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get stateClasses() {
			return stateClasses;
		},
		get styles() {
			return styles;
		}
	};
}

export default createGraphPortState;



