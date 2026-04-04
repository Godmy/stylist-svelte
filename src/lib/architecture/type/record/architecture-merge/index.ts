export type RecordArchitectureMerge<TContracts extends readonly unknown[]> =
	TContracts extends readonly [infer THead, ...infer TTail]
		? THead & RecordArchitectureMerge<TTail>
		: {};
