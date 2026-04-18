import type { StepIconProps } from '$stylist/notification/type/struct/step-icon-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createStepIconState(props: StepIconProps) {
	const status = $derived(props.status ?? 'pending');
	const size = $derived(props.size ?? 'md');
	const iconSize = $derived(size === 'sm' ? 14 : size === 'lg' ? 22 : 18);
	
	const classes = $derived(
		joinClassNames('step-icon', `status-${status}`, `size-${size}`, props.class ?? '')
	);
	
	const content = $derived(
		(() => {
			if (status === 'completed') {
				return { type: 'icon', icon: 'check', size: iconSize };
			}
			if (status === 'error') {
				return { type: 'icon', icon: 'x', size: iconSize };
			}
			return { type: 'number', value: props.stepNumber };
		})()
	);

	return {
		get classes() { return classes; },
		get content() { return content; },
		Check: 'check' as const,
		X: 'x' as const
	};
}

export default createStepIconState;
