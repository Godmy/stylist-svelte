import { mergeClasses } from '$stylist/utils/classes';
import type { TabContainerProps } from '$stylist/design-system/types/interaction/tabs';

export const createTabListState = (props: TabContainerProps) => {
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(
		mergeClasses('flex items-center gap-1', disabled ? 'opacity-[var(--opacity-50)]' : '', props.class)
	);
	return {
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		}
	};
};

export default createTabListState;





