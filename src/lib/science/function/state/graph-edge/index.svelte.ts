import type { GraphEdgeRecipe } from '$stylist/science/interface/recipe/graph-edge';
import type { TokenTrajectory } from '$stylist/architecture/type/enum/trajectory';
import { GraphStyleManager } from '$stylist/canvas/class/style-manager/graph';

export function createGraphEdgeState(props: GraphEdgeRecipe) {
	const directed = $derived(props.directed ?? false);
	const type = $derived((props.type ?? 'straight') as TokenTrajectory);
	const active = $derived(Boolean(props.active));
	const style = $derived(props.style ?? {});

	const classes = $derived(GraphStyleManager.getGraphEdgeClasses(directed, type, active));
	const styles = $derived(GraphStyleManager.getGraphLineStyles(style));

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





