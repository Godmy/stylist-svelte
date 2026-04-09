/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { ComponentClasses } from './component-classes';
export type { ExtendedPreset } from './extended-preset';
export type { InputPreset } from './input-preset';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

/**
 * Base Preset type — main export
 */
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