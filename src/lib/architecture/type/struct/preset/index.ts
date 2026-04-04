import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export type Preset<V extends string, S extends string> = {
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
};

export type InputPreset<
	V extends string = TokenAppearance,
	S extends string = TokenSize
> = Preset<V, S> & {
	classes: Preset<V, S>['classes'] & {
		error?: string;
	};
};

export type ComponentClasses<
	V extends string | number | symbol,
	S extends string | number | symbol
> = {
	base: string;
	variants: Record<V, string>;
	sizes: Record<S, string>;
};

export type ExtendedPreset<V extends string, S extends string, T = {}> =
	Preset<V, S> & {
		classes: Preset<V, S>['classes'] & T;
	};
