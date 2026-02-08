import type { TabPanelsProps } from '$stylist/design-system/attributes';
import { getTabPanelsClasses } from '../helpers';

export const createTabPanelsState = (props: TabPanelsProps) => {
	const disabled = props.disabled ?? false;
	return {
		classes: getTabPanelsClasses(disabled, props.class)
	};
};
