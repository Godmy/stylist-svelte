import type { StepIconProps } from '$stylist/notification/type/struct/step-icon-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import Check from '$stylist/svg/information/outline/check.svg';
import X from '$stylist/svg/information/outline/x.svg';

export type StepIconContent = 
	| { type: 'icon'; icon: typeof Check; size: number }
	| { type: 'number'; value: number | undefined };

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
				return { type: 'icon', icon: Check, size: iconSize };
			}
			if (status === 'error') {
				return { type: 'icon', icon: X, size: iconSize };
			}
			return { type: 'number', value: props.stepNumber };
		})()
	);

	return {
		get classes() { return classes; },
		get content() { return content; },
		Check,
		X
	};
}

export default createStepIconState;
