import type { ComponentSize } from '../tokens/architecture/component-size';
import type { INPUT_VARIANTS } from '../tokens/information/input-variants';

export interface Preset<V extends string, S extends string> {
	variants: readonly V[];
	sizes: readonly S[];
	defaults: {
		variant: V;
		size: S;
		disabled: boolean;
		block?: boolean;
	};
	classes: {
		base: string;
		size: Record<S, string>;
		variant: Record<V, string>;
		state: Record<string, string>;
		focusVisible?: string;
	};
	loaderSize?: Record<S, string>;
}

export interface InputPreset<
	V extends string = (typeof INPUT_VARIANTS.input)[number],
	S extends string = ComponentSize
> extends Preset<V, S> {
	classes: Preset<V, S>['classes'] & {
		error?: string;
	};
}

export interface InputStateOptions<
	V extends string = (typeof INPUT_VARIANTS.input)[number],
	S extends string = ComponentSize
> {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}

export interface ComponentClasses<
	V extends string | number | symbol,
	S extends string | number | symbol
> {
	base: string;
	variants: Record<V, string>;
	sizes: Record<S, string>;
}

export interface ExtendedPreset<V extends string, S extends string, T = {}>
	extends Preset<V, S> {
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




