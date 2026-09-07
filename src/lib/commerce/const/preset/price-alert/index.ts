export const PresetPriceAlert = {
	variants: ['monitoring', 'success', 'warning'] as const,
	sizes: ['sm', 'md', 'lg'] as const,
	defaults: {
		variant: 'monitoring',
		size: 'md',
		disabled: false
	},
	classes: {
		base: 'price-alert',
		size: {
			sm: 'price-alert--sm',
			md: 'price-alert--md',
			lg: 'price-alert--lg'
		},
		variant: {
			monitoring: 'price-alert--monitoring',
			success: 'price-alert--success',
			warning: 'price-alert--warning'
		},
		state: {
			disabled: 'price-alert--disabled'
		}
	}
};
