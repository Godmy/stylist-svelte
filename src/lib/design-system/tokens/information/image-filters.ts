export const IMAGE_FILTERS = [
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
export type ImageFilter = (typeof IMAGE_FILTERS)[number];
