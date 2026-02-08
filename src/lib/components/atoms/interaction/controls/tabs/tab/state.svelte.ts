import type { TabProps } from '$stylist/design-system/attributes';
import { getTabClasses } from '../helpers';

export const createTabState = (props: TabProps) => {
	const variant = props.variant ?? 'default';
	const size = props.size ?? 'md';
	const selected = props.selected ?? false;
	const disabled = props.disabled ?? false;

	return {
		classes: getTabClasses(variant, size, selected, disabled, props.class)
	};
};
