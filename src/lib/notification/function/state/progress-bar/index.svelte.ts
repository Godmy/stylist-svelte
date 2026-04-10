import type { ProgressBarProps } from '$stylist/notification/type/struct/progress-bar-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createProgressBarState(props: ProgressBarProps) {
	const value = $derived(props.value ?? 0);
	const max = $derived(props.max ?? 100);
	const label = $derived(props.label);
	const showPercentage = $derived(props.showPercentage ?? true);
	const size = $derived(props.size ?? 'md');
	const variant = $derived(props.variant ?? 'primary');

	const percentage = $derived(Math.min(Math.max((value / max) * 100, 0), 100));

	const containerClass = $derived(joinClassNames('progress-bar-container', props.class ?? ''));
	const labelWrapperClass = $derived('progress-bar-label-wrapper');
	const labelClass = $derived('progress-bar-label');
	const trackClass = $derived(joinClassNames('progress-bar-track', `size-${size}`));
	const fillClass = $derived(
		joinClassNames('progress-bar-fill', `size-${size}`, `variant-${variant}`)
	);
	const fillStyle = $derived(`width: ${percentage}%`);

	return {
		get value() { return value; },
		get max() { return max; },
		get label() { return label; },
		get showPercentage() { return showPercentage; },
		get percentage() { return percentage; },
		get containerClass() { return containerClass; },
		get labelWrapperClass() { return labelWrapperClass; },
		get labelClass() { return labelClass; },
		get trackClass() { return trackClass; },
		get fillClass() { return fillClass; },
		get fillStyle() { return fillStyle; }
	};
}

export default createProgressBarState;
