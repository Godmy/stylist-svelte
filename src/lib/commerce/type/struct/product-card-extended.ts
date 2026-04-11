export interface Props {
	title?: string;
	price?: number;
	currency?: string;
	image?: string;
	rating?: number;
	reviewCount?: number;
	description?: string;
	features?: string[];
	badge?: string;
	onAddToCart?: () => void;
	onWishlist?: () => void;
	class?: string;
}

export const badgeStyles = {
	sale: 'bg-[var(--color-danger-500)] text-[var(--color-text-inverse)]',
	new: 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]',
	popular: 'bg-yellow-500 text-[var(--color-text-primary)]',
	default: 'bg-[var(--color-background-tertiary)] text-[var(--color-text-primary)]'
} as const;
