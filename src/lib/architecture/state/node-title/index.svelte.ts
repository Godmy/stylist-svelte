import type { NodeTitleProps } from '$stylist/information/interface/node-title';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import { NodeTitleStyleManager } from '$stylist/information/class/style-manager/node-title';

export function createNodeTitleState(props: NodeTitleProps) {
	const variant = $derived(
		(props.variant ?? 'default') as NonNullable<NodeTitleProps['variant']>
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







