import type { Preset } from './interaction';

export interface ComponentClasses<V extends string | number | symbol, S extends string | number | symbol> {
	base: string;
	variants: Record<V, string>;
	sizes: Record<S, string>;
}

export interface ExtendedPreset<V extends string, S extends string, T = {}> extends Preset<V, S> {
	classes: Preset<V, S>['classes'] & T;
}

export interface ComponentStateOptions<V extends string, S extends string> {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}

export function createDefaultValues<V extends string, S extends string>(
	defaultVariant: V,
	defaultSize: S,
	defaultDisabled = false
) {
	return {
		variant: defaultVariant,
		size: defaultSize,
		disabled: defaultDisabled
	};
}
