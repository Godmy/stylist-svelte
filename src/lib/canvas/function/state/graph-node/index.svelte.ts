import type { GraphNodeRecipe } from '$stylist/science/interface/recipe/graph-node';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { GraphStyleManager } from '$stylist/canvas/class/style-manager/graph';

export function createGraphNodeState(props: GraphNodeRecipe) {
	const size = $derived((props.size ?? 'md') as TokenSize);
	const color = $derived(props.color ?? 'var(--color-primary-500)');
	const selected = $derived(Boolean(props.selected));
	const positionStyle = $derived(GraphStyleManager.getGraphNodePositionStyle(props.x, props.y));
	const sizeClasses = $derived(GraphStyleManager.getGraphNodeSizeClasses(size));
	const stateClasses = $derived(GraphStyleManager.getGraphNodeStateClasses(selected));
	const style = $derived(`${positionStyle}; --graph-node-color: ${color};`);

	return {
		get size() {
			return size;
		},
		get selected() {
			return selected;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get stateClasses() {
			return stateClasses;
		},
		get style() {
			return style;
		}
	};
}

export default createGraphNodeState;





