export const TOKEN_IMAGE_FILTER = [
	'none',
	'grayscale',
	'sepia',
	'invert',
	'blur',
	'brightness',
	'contrast',
	'hue-rotate',
	'saturate'
] as const;

export type TokenImageFilter = (typeof TOKEN_IMAGE_FILTER)[number];
