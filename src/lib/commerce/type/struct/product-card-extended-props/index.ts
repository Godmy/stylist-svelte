export type ProductCardExtendedProps = {
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
