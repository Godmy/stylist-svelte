import type { GraphvizDirectedEdgeRecipe } from '$stylist/science/interface/recipe/graphviz-directed-edge';
import { GraphvizDirectedEdgeStyleManager } from '$stylist/science/class/style-manager/graphviz-directed-edge-style-manager';

export function createGraphvizDirectedEdgeState(props: GraphvizDirectedEdgeRecipe) {
	const id = $derived(props.id);
	const sourceX = $derived(props.sourceX ?? 0);
	const sourceY = $derived(props.sourceY ?? 0);
	const targetX = $derived(props.targetX ?? 100);
	const targetY = $derived(props.targetY ?? 100);
	const label = $derived(props.label ?? '');
	const color = $derived(props.color ?? 'var(--color-text-primary)');
	const width = $derived(props.width ?? 2);
	const strokeStyle = $derived(props.style ?? 'solid');
	const dashArray = $derived(strokeStyle === 'dashed' ? '5,5' : strokeStyle === 'dotted' ? '2,2' : 'none');
	const rootClass = $derived(GraphvizDirectedEdgeStyleManager.root(typeof props.class === 'string' ? props.class : ''));
	const labelX = $derived((sourceX + targetX) / 2);
	const labelY = $derived((sourceY + targetY) / 2 - 10);

	return {
		get id() {
			return id;
		},
		get sourceX() {
			return sourceX;
		},
		get sourceY() {
			return sourceY;
		},
		get targetX() {
			return targetX;
		},
		get targetY() {
			return targetY;
		},
		get label() {
			return label;
		},
		get color() {
			return color;
		},
		get width() {
			return width;
		},
		get dashArray() {
			return dashArray;
		},
		get rootClass() {
			return rootClass;
		},
		get labelX() {
			return labelX;
		},
		get labelY() {
			return labelY;
		}
	};
}

export default createGraphvizDirectedEdgeState;
