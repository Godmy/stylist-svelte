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
