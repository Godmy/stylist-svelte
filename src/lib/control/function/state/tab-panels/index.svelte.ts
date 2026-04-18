import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { SlotTabContainer as TabContainerProps } from '$stylist/control/interface/slot/tab-container';

export const createTabPanelsState = (props: TabContainerProps) => {
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(joinClassNames('mt-4', disabled ? 'opacity-[var(--opacity-50)]' : '', props.class));
	return {
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		}
	};
};

export default createTabPanelsState;






