import type { SlotTabContainer as TabContainerProps } from '$stylist/navigation/interface/slot/tab-container';

export const createTabPanelsState = (props: TabContainerProps) => {
	const disabled = $derived(props.disabled ?? false);

	return {
		get disabled() {
			return disabled;
		}
	};
};

export default createTabPanelsState;
