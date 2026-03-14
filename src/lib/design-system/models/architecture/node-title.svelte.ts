import type { NodeTitleProps } from '$stylist/design-system/contracts';
import type { NodeTitleVariant } from '$stylist/design-system/tokens/interaction/statuses';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture';
import { NodeTitleStyleManager } from '$stylist/design-system/styles';

export function createNodeTitleState(props: NodeTitleProps) {
	const variant = $derived((props.variant ?? 'default') as NodeTitleVariant);
	const size = $derived((props.size ?? 'md') as ComponentSize);
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






