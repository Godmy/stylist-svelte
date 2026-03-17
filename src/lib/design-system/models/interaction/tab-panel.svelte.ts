import { mergeClasses } from '$stylist/design-system/utils/classes';
﻿import type { TabPanelProps } from '$stylist/design-system/contracts';

export const createTabPanelState = (props: TabPanelProps, selected: () => boolean) => {
	const isSelected = $derived.by(selected);
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(
		mergeClasses(isSelected ? 'block' : 'hidden', disabled ? 'opacity-[var(--opacity-50)]' : '', props.class)
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





