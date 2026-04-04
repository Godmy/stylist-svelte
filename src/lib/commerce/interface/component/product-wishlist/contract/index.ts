/**
 * ProductWishlistContract — список желаний.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface WishlistItemContract {
	id: string;
	title: string;
	price: number;
	currency: string;
	image: string;
	rating: number;
}

export interface ProductWishlistEventsContract {
	onRemove?: (id: string) => void;
	onMoveToCart?: (id: string) => void;
}

export interface ProductWishlistContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, ProductWishlistEventsContract {
	/** List of wishlist items */
	items: WishlistItemContract[];
}
