import { clsx } from 'clsx';
import { twMerge as twMergeLib } from 'tailwind-merge';
import type { Preset } from '$stylist/design-system/presets/interaction/interaction-presets';

export type ClassValue =
	| string
	| number
	| bigint
	| null
	| undefined
	| boolean
	| { [key: string]: boolean }
	| Iterable<ClassValue>;

export function twJoin(...inputs: ClassValue[]): string {
	return clsx(inputs);
}

export function twMerge(...inputs: ClassValue[]): string {
	return twMergeLib(clsx(inputs));
}

export function cn(...inputs: ClassValue[]): string {
	return twMergeLib(clsx(inputs));
}

/** Merge multiple class strings, filtering out falsy values. */
export function mergeClasses(...classes: Array<string | undefined | false | null>): string {
	return classes.filter(Boolean).join(' ');
}

/** Conditionally add classes based on conditions. */
export function conditionalClasses(
	baseClasses: string,
	conditionalClasses: Record<string, string | undefined>
): string {
	const additional = Object.entries(conditionalClasses)
		.filter(([condition]) => Boolean(condition))
		.map(([, classes]) => classes)
		.filter(Boolean);

	return mergeClasses(baseClasses, ...additional);
}

/** Build CSS classes from preset configuration for interactive components. */
export function buildClasses<V extends string, S extends string>(
	preset: Preset<V, S>,
	options: {
		variant: V;
		size: S;
		disabled?: boolean;
		loading?: boolean;
		block?: boolean;
		className?: string;
		extra?: Array<string | undefined>;
	}
): string {
	const { variant, size, disabled, loading, block, className, extra = [] } = options;

	return [
		preset.classes.base,
		preset.classes.focusVisible ?? '',
		preset.classes.variant[variant],
		preset.classes.size[size],
		disabled || loading ? preset.classes.state.disabled : '',
		block ? preset.classes.state.block : '',
		...extra,
		className
	]
		.filter(Boolean)
		.join(' ');
}
