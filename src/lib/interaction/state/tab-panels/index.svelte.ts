import { mergeClasses } from '$stylist/information/function/classes';
import type { TabContainerProps } from '$stylist/interaction/interface/tabs';

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





