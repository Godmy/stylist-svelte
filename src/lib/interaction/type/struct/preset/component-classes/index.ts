export type ComponentClasses<
	V extends string | number | symbol,
	S extends string | number | symbol
> = {
	base: string;
	variants: Record<V, string>;
	sizes: Record<S, string>;
};
