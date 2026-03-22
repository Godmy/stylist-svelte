export const RADIAL_GRADIENTS = {
	center: 'radial-gradient(circle at center, var(--gradient-inner), var(--gradient-outer))',
	corner: 'radial-gradient(circle at corner, var(--gradient-inner), var(--gradient-outer))'
} as const;

export type RadialGradientKey = keyof typeof RADIAL_GRADIENTS;
