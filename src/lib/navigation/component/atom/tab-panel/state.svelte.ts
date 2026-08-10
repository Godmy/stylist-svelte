import type { SlotTabPanel as TabPanelProps } from '$stylist/navigation/interface/slot/tab-panel';

export const createTabPanelState = (props: TabPanelProps, selected: () => boolean) => {
	const isSelected = $derived.by(selected);
	const disabled = $derived(props.disabled ?? false);

	return {
		get isSelected() {
			return isSelected;
		},
		get disabled() {
			return disabled;
		}
	};
};

export default createTabPanelState;
