import type { ProgressBarWithLabelProps } from '$stylist/notification/type/struct/progress-bar-with-label-props';

export function createProgressBarWithLabelState(props: ProgressBarWithLabelProps) {
	const value = $derived(props.value ?? 0);
	const max = $derived(props.max ?? 100);
	const label = $derived(props.label ?? '');
	const showPercentage = $derived(props.showPercentage ?? true);
	const color = $derived(props.color ?? 'blue');
	const height = $derived(props.height ?? 'h-2');

	const percentage = $derived(Math.round((value / max) * 100));

	const colorClasses: Record<string, string> = {
		blue: 'bg-[var(--color-primary-500)]',
		green: 'bg-[var(--color-success-500)]',
		red: 'bg-[var(--color-danger-500)]',
		yellow: 'bg-yellow-500',
		purple: 'bg-[var(--color-secondary-500)]'
	};

	const containerClasses = $derived(`${props.class ?? ''}`);
	const labelWrapperClasses = $derived('mb-1 flex justify-between');
	const labelClasses = $derived('text-sm font-medium');
	const trackClasses = $derived(`w-full rounded-full bg-[var(--color-background-tertiary)] ${height}`);
	const fillClasses = $derived(`h-full rounded-full ${colorClasses[color] || colorClasses.blue}`);

	return {
		get value() { return value; },
		get max() { return max; },
		get label() { return label; },
		get showPercentage() { return showPercentage; },
		get percentage() { return percentage; },
		get containerClasses() { return containerClasses; },
		get labelWrapperClasses() { return labelWrapperClasses; },
		get labelClasses() { return labelClasses; },
		get trackClasses() { return trackClasses; },
		get fillClasses() { return fillClasses; }
	};
}

export default createProgressBarWithLabelState;
