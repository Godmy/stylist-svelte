export type StructIntersectAll<TTypes extends readonly unknown[]> =
	TTypes extends readonly [infer THead, ...infer TTail]
		? THead & StructIntersectAll<TTail>
		: {};
