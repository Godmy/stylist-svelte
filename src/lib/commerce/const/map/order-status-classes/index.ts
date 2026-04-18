export const ORDER_STATUS_CLASSES = {
	pending: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
	processing: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
	shipped: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
	delivered: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
	cancelled: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]'
} as const;
