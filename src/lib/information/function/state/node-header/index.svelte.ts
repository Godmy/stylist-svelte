import type { NodeHeaderRecipe as NodeHeaderProps } from '$stylist/information/interface/recipe/node-header';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { NodeHeaderStyleManager } from '$stylist/information/class/style-manager/node-header';

export function createNodeHeaderState(props: NodeHeaderProps) {
	const size = $derived((props.size ?? 'md') as TokenSize);
	const selected = $derived(Boolean(props.selected));
	const editable = $derived(props.editable ?? false);
	const showClose = $derived(props.showClose ?? false);
	const showSettings = $derived(props.showSettings ?? false);
	const showDuplicate = $derived(props.showDuplicate ?? false);
	const showDelete = $derived(props.showDelete ?? false);
	const color = $derived(props.color ?? '#2563eb');

	const classes = $derived(NodeHeaderStyleManager.getHeaderClasses(size, selected));
	const styles = $derived(NodeHeaderStyleManager.getHeaderStyles(color));

	return {
		get size() {
			return size;
		},
		get selected() {
			return selected;
		},
		get editable() {
			return editable;
		},
		get showActions() {
			return showClose || showSettings || showDuplicate || showDelete;
		},
		get color() {
			return color;
		},
		get classes() {
			return classes;
		},
		get styles() {
			return styles;
		}
	};
}

export default createNodeHeaderState;




