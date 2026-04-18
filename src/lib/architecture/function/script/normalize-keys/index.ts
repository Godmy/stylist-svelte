export function normalizeKeys<TKey extends string>(keys: TKey | readonly TKey[]): readonly TKey[] {
	return (Array.isArray(keys) ? [...keys] : [keys]) as readonly TKey[];
}
