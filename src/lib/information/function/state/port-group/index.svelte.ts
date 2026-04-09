import type { PortGroupRecipe as PortGroupProps } from '$stylist/media/interface/recipe/port-group';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import { PortGroupStyleManager } from '$stylist/science/class/style-manager/port-group';

export function createPortGroupState(props: PortGroupProps) {
	const direction = $derived(props.direction ?? 'input');
	const portSize = $derived((props.portSize ?? 'md') as TokenSize);
	const showLabels = $derived(props.showLabels ?? true);
	const compact = $derived(props.compact ?? false);
	const divider = $derived(props.divider ?? false);
	const hasTitle = $derived(Boolean(props.title));

	const classes = $derived(PortGroupStyleManager.getGroupClasses(direction, compact));

	return {
		get direction() {
			return direction;
		},
		get portSize() {
			return portSize;
		},
		get showLabels() {
			return showLabels;
		},
		get compact() {
			return compact;
		},
		get divider() {
			return divider;
		},
		get hasTitle() {
			return hasTitle;
		},
		get classes() {
			return classes;
		}
	};
}

export default createPortGroupState;





