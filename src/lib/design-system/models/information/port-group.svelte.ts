import type { PortGroupProps } from '$stylist/design-system/contracts';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import { PortGroupStyleManager } from '$stylist/design-system/styles';

export function createPortGroupState(props: PortGroupProps) {
	const direction = $derived(props.direction);
	const portSize = $derived((props.portSize ?? 'md') as ComponentSize);
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



