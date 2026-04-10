import type { ProgressCircleProps } from '$stylist/notification/type/struct/progress-circle-props';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createProgressCircleState(props: ProgressCircleProps) {
	const progress = $derived(props.progress ?? 0);
	const size = $derived(props.size ?? 'md');
	const color = $derived(props.color ?? 'primary');
	const strokeWidth = $derived(props.strokeWidth ?? 8);

	const normalizedProgress = $derived(Math.min(100, Math.max(0, progress)));
	const circumference = 2 * Math.PI * 45;
	const strokeDashoffset = $derived(circumference - (normalizedProgress / 100) * circumference);

	const containerClass = $derived(joinClassNames('progress-circle-container', props.class ?? ''));
	const svgClass = $derived('progress-circle-svg');
	const backgroundCircleClass = $derived(
		joinClassNames('progress-circle', `stroke-[${strokeWidth}px]`, `variant-${color}`)
	);
	const progressCircleClass = $derived(
		joinClassNames('progress-circle-fill', `stroke-[${strokeWidth}px]`, `variant-${color}`)
	);
	const labelClass = $derived('progress-circle-label');

	return {
		get progress() { return progress; },
		get size() { return size; },
		get color() { return color; },
		get strokeWidth() { return strokeWidth; },
		get normalizedProgress() { return normalizedProgress; },
		get circumference() { return circumference; },
		get strokeDashoffset() { return strokeDashoffset; },
		get containerClass() { return containerClass; },
		get svgClass() { return svgClass; },
		get backgroundCircleClass() { return backgroundCircleClass; },
		get progressCircleClass() { return progressCircleClass; },
		get labelClass() { return labelClass; }
	};
}

export default createProgressCircleState;
