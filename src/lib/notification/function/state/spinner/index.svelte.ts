import type { SpinnerProps } from '$stylist/notification/type/struct/spinner-props';

export type SpinnerVariant = 'css' | 'svg' | 'icon';

const sizeClassesMap: Record<string, string> = {
	xs: 'w-4 h-4',
	sm: 'w-5 h-5',
	md: 'w-8 h-8',
	lg: 'w-12 h-12',
	xl: 'w-16 h-16'
};

const colorClassesMap: Record<string, string> = {
	blue: 'text-[var(--color-primary-500)]',
	gray: 'text-[var(--color-text-secondary)]',
	green: 'text-[var(--color-success-500)]',
	red: 'text-[var(--color-danger-500)]',
	yellow: 'text-yellow-500',
	white: 'text-[var(--color-text-inverse)]'
};

export function createSpinnerState(props: SpinnerProps) {
	const variant = $derived((props.variant as SpinnerVariant) ?? 'icon');
	const size = $derived(props.size ?? 'md');
	const color = $derived(props.color ?? 'blue');
	const label = $derived(props.label ?? 'Loading...');
	const showLabel = $derived(props.showLabel ?? false);

	const sizeClasses = $derived(sizeClassesMap[size] || sizeClassesMap.md);
	const colorClasses = $derived(colorClassesMap[color] || `text-[${color}]`);
	
	const iconColorClasses = $derived(() => {
		if (color === 'blue') return 'text-[var(--color-primary-500)]';
		if (color === 'gray') return 'text-[var(--color-text-secondary)]';
		if (color === 'green') return 'text-[var(--color-success-500)]';
		if (color === 'red') return 'text-[var(--color-danger-500)]';
		if (color === 'yellow') return 'text-yellow-500';
		if (color === 'white') return 'text-[var(--color-text-inverse)]';
		return 'text-[var(--color-primary-500)]';
	});

	const containerClasses = $derived(`flex flex-col items-center justify-center ${props.class ?? ''}`);

	return {
		get variant() { return variant; },
		get size() { return size; },
		get color() { return color; },
		get label() { return label; },
		get showLabel() { return showLabel; },
		get sizeClasses() { return sizeClasses; },
		get colorClasses() { return colorClasses; },
		get iconColorClasses() { return iconColorClasses; },
		get containerClasses() { return containerClasses; }
	};
}

export default createSpinnerState;
