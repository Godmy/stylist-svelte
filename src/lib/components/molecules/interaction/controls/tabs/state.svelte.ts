import type { TabProps } from '$stylist/design-system/attributes';
import type { TabVariant } from '$stylist/design-system/tokens/tabs';
import {
	DISABLED_CLASSES,
	TAB_ACTIVE_CLASSES,
	TAB_BASE_CLASSES,
	TAB_INACTIVE_CLASSES,
	TAB_SIZE_CLASSES,
	TAB_VARIANT_CLASSES
} from '$stylist/design-system/classes';
import { mergeClasses } from '$stylist/utils/classes';

export function createTabState(props: TabProps) {
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const isSelected = $derived(props.selected ?? false);
	const classes = $derived(
		mergeClasses(
			TAB_BASE_CLASSES,
			TAB_SIZE_CLASSES[size as 'sm' | 'md' | 'lg'],
			TAB_VARIANT_CLASSES[variant as TabVariant],
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
