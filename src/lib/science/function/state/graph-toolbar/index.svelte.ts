import type { GraphToolbarRecipe as GraphToolbarProps } from '$stylist/science/interface/recipe/graph-toolbar';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { GraphToolbarStyleManager } from '$stylist/navigation/class/style-manager/graph-toolbar';

export function createGraphToolbarState(props: GraphToolbarProps) {
	const size = $derived((props.size ?? 'md') as TokenSize);
	const orientation = $derived(props.orientation ?? 'horizontal');
	const compact = $derived(props.compact ?? false);
	const showTooltips = $derived(props.showTooltips ?? true);

	const classes = $derived(
		GraphToolbarStyleManager.getToolbarClasses(orientation, size, compact)
	);

	return {
		get size() {
			return size;
		},
		get orientation() {
			return orientation;
		},
		get compact() {
			return compact;
		},
		get showTooltips() {
			return showTooltips;
		},
		get classes() {
			return classes;
		}
	};
}

export default createGraphToolbarState;




