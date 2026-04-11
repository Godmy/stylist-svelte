import type { WishlistButtonRecipe } from '$stylist/commerce/interface/recipe/wishlist-button';
import { WishlistButtonStyleManager } from '$stylist/commerce/class/style-manager/wishlist-button';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createWishlistButtonState(props: WishlistButtonRecipe) {
	let isLoading = $state(false);
	let showMessage = $state(false);
	let message = $state('');
	let inWishlist = $state(props.inWishlist ?? false);

	const containerClass = $derived(mergeClassNames(props.class ?? ''));
	const buttonClass = $derived(
		`inline-flex items-center px-3 py-2 border rounded-md ${
			inWishlist
				? 'bg-[var(--color-danger-100)] text-[var(--color-danger-600)] border-[var(--color-danger-200)]'
				: 'bg-[var(--color-background-primary)] border-[var(--color-border-primary)]'
		} ${props.buttonClass ?? ''}`
	);

	return {
		get isLoading() { return isLoading; },
		get showMessage() { return showMessage; },
		get message() { return message; },
		get inWishlist() { return inWishlist; },
		get containerClass() { return containerClass; },
		get buttonClass() { return buttonClass; },
		async toggleWishlist() {
			if (props.disabled || isLoading) return;
			isLoading = true;
			try {
				props.onToggle?.(!inWishlist);
				await new Promise((resolve) => setTimeout(resolve, 250));
				inWishlist = !inWishlist;
				props.onSuccess?.();
				message = inWishlist ? 'Added to wishlist' : 'Removed from wishlist';
			} catch (error) {
				props.onError?.(error instanceof Error ? error : new Error(String(error)));
				message = 'Failed to update wishlist';
			} finally {
				isLoading = false;
				showMessage = true;
				setTimeout(() => (showMessage = false), 1500);
			}
		},
		hideMessage() { showMessage = false; }
	};
}

export default createWishlistButtonState;
