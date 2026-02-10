import type { ToggleGroupRootProps } from '$stylist/design-system/attributes';
import { mergeClasses } from '$stylist/utils/classes';

export const createToggleGroupRootState = (props: ToggleGroupRootProps) => {
	const classes = $derived(
		mergeClasses('inline-flex items-center gap-1', props.class)
	);
	return {
		get classes() {
			return classes;
		}
	};
};
