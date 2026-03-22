export const TOKEN_COMPONENT_TYPE = [
	'text',
	'image',
	'video',
	'button',
	'divider',
	'heading',
	'container',
	'grid'
] as const;

export type TokenComponentType = (typeof TOKEN_COMPONENT_TYPE)[number];
