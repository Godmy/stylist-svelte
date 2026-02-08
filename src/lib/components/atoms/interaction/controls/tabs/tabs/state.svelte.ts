import type { TabsProps } from '$stylist/design-system/attributes';
import { getTabsClasses } from '../helpers';

export const createTabsState = (props: TabsProps) => {
	const variant = props.variant ?? 'default';
	const size = props.size ?? 'md';
	const disabled = props.disabled ?? false;

	return {
		classes: getTabsClasses(disabled, props.class),
		variant,
		size,
		disabled
	};
};
