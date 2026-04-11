import type { ProductCardExtendedProps as Props } from '$stylist/commerce/type/struct/product-card-extended-props';

const badgeStyles = {
	default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
	new: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]',
	sale: 'bg-[var(--color-danger-100)] text-[var(--color-danger-700)]',
	featured: 'bg-[var(--color-warning-100)] text-[var(--color-warning-700)]'
} as const;

export function createProductCardExtendedState(props: Props) {
	const containerClass = $derived(
		`bg-[var(--color-background-primary)] rounded-lg shadow-md overflow-hidden ${props.class ?? ''}`
	);
	const badgeClass = $derived(
		badgeStyles[(props.badge as keyof typeof badgeStyles)] ?? badgeStyles.default
	);

	return {
		get containerClass() { return containerClass; },
		get badgeClass() { return badgeClass; }
	};
}

export default createProductCardExtendedState;
