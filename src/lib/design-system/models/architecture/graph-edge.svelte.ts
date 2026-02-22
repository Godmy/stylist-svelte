import type { GraphEdgeProps } from '$stylist/design-system/contracts';
import { GRAPH_EDGE_DEFAULTS, type GraphEdgeType } from '$stylist/design-system/tokens';
import { GraphStyleManager } from '$stylist/design-system/styles';

export function createGraphEdgeState(props: GraphEdgeProps) {
	const directed = $derived(props.directed ?? GRAPH_EDGE_DEFAULTS.directed);
	const type = $derived((props.type ?? GRAPH_EDGE_DEFAULTS.type) as GraphEdgeType);
	const active = $derived(Boolean(props.active));
	const style = $derived(props.style ?? {});

	const classes = $derived(GraphStyleManager.getGraphEdgeClasses(directed, type, active));
	const styles = $derived(GraphStyleManager.getGraphEdgeStyles(style));

	return {
		get directed() {
			return directed;
		},
		get type() {
			return type;
		},
		get active() {
			return active;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createGraphEdgeState;
