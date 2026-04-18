import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { SlotTabPanel as TabPanelProps } from '$stylist/control/interface/slot/tab-panel';

export const createTabPanelState = (props: TabPanelProps, selected: () => boolean) => {
	const isSelected = $derived.by(selected);
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(
		joinClassNames(isSelected ? 'block' : 'hidden', disabled ? 'opacity-[var(--opacity-50)]' : '', props.class)
	);

	return {
		get isSelected() {
			return isSelected;
		},
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		}
	};
};


export default createTabPanelState;







