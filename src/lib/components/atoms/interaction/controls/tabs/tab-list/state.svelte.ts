import type { TabListProps } from '$stylist/design-system/attributes';
import { getTabListClasses } from '../helpers';

export const createTabListState = (props: TabListProps) => {
	const disabled = props.disabled ?? false;
	return {
		classes: getTabListClasses(disabled, props.class)
	};
};
