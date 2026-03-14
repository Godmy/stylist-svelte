import { mergeClasses } from '$stylist/utils/classes';
import type { TabContainerProps } from '$stylist/design-system/contracts/interaction/tabs';

export const createTabPanelsState = (props: TabContainerProps) => {
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(mergeClasses('mt-4', disabled ? 'opacity-[var(--opacity-50)]' : '', props.class));
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





