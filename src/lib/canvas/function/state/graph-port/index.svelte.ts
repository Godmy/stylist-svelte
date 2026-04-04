import type { GraphPortRecipe as GraphPortProps } from '$stylist/information/interface/recipe/graph-port';
import type { GraphPortDataTypeColor } from '$stylist/canvas/type/struct/graph-port';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { GraphPortStyleManager } from '$stylist/canvas/class/style-manager/graph-port';

export function createGraphPortState(props: GraphPortProps) {
	const direction = $derived(props.direction === 'input' ? 'input' : 'output');
	const size = $derived((props.size ?? 'md') as TokenSize);
	const dataType = $derived(props.dataType ?? 'any');
	const connected = $derived(Boolean(props.connected));
	const active = $derived(Boolean(props.active));
	const color = $derived(
		props.color ??
			GraphPortStyleManager.getDataTypeColor(dataType as keyof GraphPortDataTypeColor)
	);

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




