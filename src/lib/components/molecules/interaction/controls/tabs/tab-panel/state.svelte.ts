import type { TabPanelProps } from '$stylist/design-system/attributes';
import { mergeClasses } from '$stylist/utils/classes';

export const createTabPanelState = (props: TabPanelProps, selected: boolean) => {
	const isSelected = $derived(selected);
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(
		mergeClasses(isSelected ? 'block' : 'hidden', disabled ? 'opacity-50' : '', props.class)
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
