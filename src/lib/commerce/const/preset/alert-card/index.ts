export const PresetAlertCard = {
	variants: ['primary', 'secondary', 'danger'] as const,
	sizes: ['sm', 'md', 'lg'] as const,
	defaults: {
		variant: 'primary',
		size: 'md',
		disabled: false
	},
	classes: {
		base: 'alert-card',
		size: {
			sm: 'alert-card--sm',
			md: 'alert-card--md',
			lg: 'alert-card--lg'
		},
		variant: {
			primary: 'alert-card--primary',
			secondary: 'alert-card--secondary',
			danger: 'alert-card--danger'
		},
		state: {
			disabled: 'alert-card--disabled'
		}
	}
};
