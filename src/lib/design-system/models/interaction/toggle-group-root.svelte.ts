import { mergeClasses } from '$stylist/design-system/utils/classes';
﻿import type { ToggleGroupRootProps } from '$stylist/design-system/contracts';

export const createToggleGroupRootState = (props: ToggleGroupRootProps) => {
	const classes = $derived(
		mergeClasses('inline-flex items-center gap-1', props.class)
	);
	const type = $derived(props.type ?? 'single');
	const disabled = $derived(props.disabled ?? false);

	return {
		get classes() {
			return classes;
		},
		get type() {
			return type;
		},
		get disabled() {
			return disabled;
		}
	};
};


export default createToggleGroupRootState;





