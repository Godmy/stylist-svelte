import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';

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
	V extends string = TokenAppearance,
	S extends string = TokenSize
> extends Preset<V, S> {
	classes: Preset<V, S>['classes'] & {
		error?: string;
	};
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
