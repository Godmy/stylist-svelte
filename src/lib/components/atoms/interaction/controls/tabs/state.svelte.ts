import type { TabProps } from '$stylist/design-system/attributes';
import {
	DEFAULT_TAB_SIZE,
	DEFAULT_TAB_VARIANT,
	DISABLED_CLASSES,
	TAB_ACTIVE_CLASSES,
	TAB_BASE_CLASSES,
	TAB_INACTIVE_CLASSES,
	TAB_SIZE_CLASSES,
	TAB_VARIANT_CLASSES
} from '$stylist/design-system/tokens/tabs';
import { mergeClasses } from '$stylist/utils/classes';

export function createTabState(props: TabProps) {
	const variant = $derived(props.variant ?? DEFAULT_TAB_VARIANT);
	const size = $derived(props.size ?? DEFAULT_TAB_SIZE);
	const disabled = $derived(props.disabled ?? false);
	const isSelected = $derived(props.selected ?? false);
	const classes = $derived(
		mergeClasses(
			TAB_BASE_CLASSES,
			TAB_SIZE_CLASSES[size],
			TAB_VARIANT_CLASSES[variant],
			isSelected ? TAB_ACTIVE_CLASSES : TAB_INACTIVE_CLASSES,
			disabled ? DISABLED_CLASSES : '',
			props.class
		)
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
