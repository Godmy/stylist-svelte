import { mergeClasses } from '$stylist/information/function/classes';
﻿import type { ToggleGroupRootProps } from '$stylist';

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





