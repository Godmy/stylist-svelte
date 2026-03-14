export const DIRECTIONAL_GRADIENTS = {
	horizontal: 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
	vertical: 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))',
	diagonal: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
	reverseDiagonal: 'linear-gradient(-135deg, var(--gradient-start), var(--gradient-end))'
} as const;

export type DirectionalGradientKey = keyof typeof DIRECTIONAL_GRADIENTS;
