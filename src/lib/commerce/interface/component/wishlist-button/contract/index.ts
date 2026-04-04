/**
 * WishlistButtonContract — кнопка добавления в вишлист.
 *
 * LEGO-состав:
 *   IClickable        (interaction) — disabled, loading, onClick
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface WishlistButtonEventsContract {
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: string) => void;
}

export interface WishlistButtonContract
	extends RecordArchitectureMerge<[
		IClickable,
		ThemeAttributes<HTMLButtonElement>
	]>, WishlistButtonEventsContract {
	/** Is item in wishlist */
	inWishlist?: boolean;
	/** Show label */
	showLabel?: boolean;
	/** Button CSS class */
	buttonClass?: string;
}
