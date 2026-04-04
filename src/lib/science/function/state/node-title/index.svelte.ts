import type { NodeTitleRecipe } from '$stylist/information/interface/recipe/node-title';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { NodeTitleStyleManager } from '$stylist/science/class/style-manager/node-title';

export function createNodeTitleState(props: NodeTitleRecipe) {
	const variant = $derived(
		(props.variant ?? 'default') as NonNullable<NodeTitleRecipe['variant']>
	);
	const size = $derived((props.size ?? 'md') as TokenSize);
	const selected = $derived(Boolean(props.selected));
	const editable = $derived(Boolean(props.editable));
	const color = $derived(props.color);

	const classes = $derived(NodeTitleStyleManager.getTitleClasses(variant, size, selected));
	const styles = $derived(NodeTitleStyleManager.getTitleStyles(color));

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get selected() {
			return selected;
		},
		get editable() {
			return editable;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createNodeTitleState;







