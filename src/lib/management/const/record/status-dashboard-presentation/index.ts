export const STATUS_DASHBOARD_PRESENTATION = {
	success: {
		icon: 'check-circle',
		color: 'text-[--color-success-500]',
		bg: 'bg-[--color-success-100]',
		border: 'border-[--color-success-200]'
	},
	warning: {
		icon: 'alert-circle',
		color: 'text-[--color-warning-500]',
		bg: 'bg-[--color-warning-100]',
		border: 'border-[--color-warning-200]'
	},
	error: {
		icon: 'x-circle',
		color: 'text-[--color-danger-500]',
		bg: 'bg-[--color-danger-100]',
		border: 'border-[--color-danger-200]'
	},
	pending: {
		icon: 'clock',
		color: 'text-[--color-primary-500]',
		bg: 'bg-[--color-primary-100]',
		border: 'border-[--color-primary-200]'
	},
	info: {
		icon: 'alert-circle',
		color: 'text-[--color-text-secondary]',
		bg: 'bg-[--color-background-tertiary]',
		border: 'border-[--color-border-primary]'
	}
} as const;
