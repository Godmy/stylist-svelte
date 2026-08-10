import type { SlotTab as TabProps } from '$stylist/navigation/interface/slot/tab-tabs';

export function createTabState(props: TabProps) {
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const isSelected = $derived(props.selected ?? false);

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
		}
	};
}

export default createTabState;
