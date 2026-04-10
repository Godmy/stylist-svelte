import type { AnimatedProgressProps } from '$stylist/notification/type/struct/animated-progress-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createAnimatedProgressState(props: AnimatedProgressProps) {
	const percentage = $derived(Math.round((((props.value ?? 0) - (props.min ?? 0)) / ((props.max ?? 100) - (props.min ?? 0))) * 100));

	const containerClasses = $derived(`w-full ${props.class ?? ''}`);
	const labelClasses = $derived('text-sm font-medium');
	const progressBarBgClasses = $derived('h-2.5 w-full rounded-full bg-[var(--color-background-tertiary)]');
	const progressFillClasses = $derived('h-2.5 rounded-full bg-[var(--color-primary-600)]');

	return {
		get percentage() {
			return percentage;
		},
		get containerClasses() {
			return containerClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get progressBarBgClasses() {
			return progressBarBgClasses;
		},
		get progressFillClasses() {
			return progressFillClasses;
		}
	};
}

export default createAnimatedProgressState;
