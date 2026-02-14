import type { TabProps } from '$stylist/design-system/props';
import { TabsStyleManager } from '$stylist/design-system/styles/tabs';

export function createTabState(props: TabProps) {
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const isSelected = $derived(props.selected ?? false);
	const classes = $derived(
		TabsStyleManager.getTabClasses({
			variant,
			size,
			selected: isSelected,
			disabled,
			className: props.class
		})
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get isSelected() {
			return isSelected;
		},
		get classes() {
			return classes;
		}
	};
}


export default createTabState;

