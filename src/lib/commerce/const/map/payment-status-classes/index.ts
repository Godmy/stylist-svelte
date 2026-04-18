export const PAYMENT_STATUS_CLASSES = {
	paid: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
	pending: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
	failed: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]'
} as const;
