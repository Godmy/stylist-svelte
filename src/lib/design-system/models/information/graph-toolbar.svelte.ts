import type { GraphToolbarProps } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { GraphToolbarStyleManager } from '$stylist/design-system/styles';

export function createGraphToolbarState(props: GraphToolbarProps) {
	const size = $derived((props.size ?? 'md') as ComponentSize);
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
