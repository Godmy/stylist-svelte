import type { TabsProps } from '$stylist/design-system/props';
import { mergeClasses } from '$stylist/utils/classes';

export const createTabsState = (props: TabsProps) => {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(
		mergeClasses('inline-flex items-center gap-1', disabled ? 'opacity-50 pointer-events-none' : '', props.class)
	);

	return {
		get classes() {
			return classes;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		}
	};
};


export default createTabsState;



