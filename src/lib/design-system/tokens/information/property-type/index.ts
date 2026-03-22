export const TOKEN_PROPERTY_TYPE = [
	'string',
	'number',
	'boolean',
	'enum',
	'color',
	'vector2',
	'vector3',
	'object',
	'function',
	'array',
	'any',
	'event',
	'action'
] as const;

export type TokenPropertyType = (typeof TOKEN_PROPERTY_TYPE)[number];
