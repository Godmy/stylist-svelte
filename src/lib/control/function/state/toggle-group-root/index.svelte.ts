import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { ToggleGroupRootProps } from '$stylist/control/interface/component/toggles';

export const createToggleGroupRootState = (props: ToggleGroupRootProps) => {
	const classes = $derived(
		joinClassNames('inline-flex items-center gap-1', props.class)
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







