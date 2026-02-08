import type { TabPanelProps } from '$stylist/design-system/attributes';
import { getTabPanelClasses } from '../helpers';

export const createTabPanelState = (props: TabPanelProps) => {
	const selected = false;
	const disabled = props.disabled ?? false;
	return {
		classes: getTabPanelClasses(selected, disabled, props.class)
	};
};
