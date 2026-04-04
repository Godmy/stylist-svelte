/**
 * TokenMapType — токен типов карт для гео-компонентов.
 *
 * Таксономия: Geo (domain-specific)
 * Используется в: IMapWithMarkersProps, IMapInteractionProps, etc.
 */
export const TOKEN_MAP_TYPE = [
	'roadmap',
	'satellite',
	'terrain',
	'hybrid'
] as const;

export type TokenMapType = (typeof TOKEN_MAP_TYPE)[number];
