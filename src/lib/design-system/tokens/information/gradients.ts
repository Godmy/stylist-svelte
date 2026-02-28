export const GRADIENTS = {
	primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
	secondary: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)',
	success: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)',
	warning: 'linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)',
	danger: 'linear-gradient(135deg, #ef4444 0%, #fca5a5 100%)',
	info: 'linear-gradient(135deg, #06b6d4 0%, #7dd3fc 100%)',
	neutral: 'linear-gradient(135deg, #6b7280 0%, #d1d5db 100%)',
	sunset: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
	ocean: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
	forest: 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
	cosmic: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
} as const;

export type GradientKey = keyof typeof GRADIENTS;
