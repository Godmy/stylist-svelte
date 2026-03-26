export type MergeArchitectureContract<TContracts extends readonly unknown[]> =
	TContracts extends readonly [infer THead, ...infer TTail]
		? THead & MergeArchitectureContract<TTail>
		: {};
