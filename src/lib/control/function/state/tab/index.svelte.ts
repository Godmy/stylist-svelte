import type { SlotTab as TabProps } from '$stylist/control/interface/slot/tab-tabs';
import { TabsStyleManager } from '$stylist/control/class/style-manager/tabs';

export function createTabState(props: TabProps) {
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const isSelected = $derived(props.selected ?? false);
	const classes = $derived(
		TabsStyleManager.getTabClass(
			variant,
			size,
			isSelected,
			disabled,
			props.class
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get isSelected() {
			return isSelected;
		},
		get classes() {
			return classes;
		}
	};
}


export default createTabState;









