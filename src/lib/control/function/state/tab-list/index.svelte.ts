import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { TabContainerProps } from '$stylist/control/interface/component/tabs/other';

export const createTabListState = (props: TabContainerProps) => {
	const disabled = $derived(props.disabled ?? false);
	const classes = $derived(
		joinClassNames('flex items-center gap-1', disabled ? 'opacity-[var(--opacity-50)]' : '', props.class)
	);
	return {
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		}
	};
};

export default createTabListState;






