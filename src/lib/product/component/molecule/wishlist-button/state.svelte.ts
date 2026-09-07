import { ClassNamesManager } from '$stylist/layout/class/manager/class-names';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeWishlistButton } from '$stylist/product/interface/recipe/wishlist-button';

export function createWishlistButtonState(
	props: RecipeWishlistButton & HTMLAttributes<HTMLButtonElement>
) {
	let isLoading = $state(false);
	let showMessage = $state(false);
	let message = $state('');
	let inWishlist = $state(props.inWishlist ?? false);

	const containerClass = $derived(ClassNamesManager.merge('wishlist-button', props.class));
	const buttonClass = $derived(
		ClassNamesManager.merge(
			'wishlist-button__button',
			inWishlist && 'wishlist-button__button--active',
			props.buttonClass
		)
	);

	return {
		get isLoading() {
			return isLoading;
		},
		get showMessage() {
			return showMessage;
		},
		get message() {
			return message;
		},
		get inWishlist() {
			return inWishlist;
		},
		get containerClass() {
			return containerClass;
		},
		get buttonClass() {
			return buttonClass;
		},
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
				props.onError?.(error instanceof Error ? error.message : String(error));
				message = 'Failed to update wishlist';
			} finally {
				isLoading = false;
				showMessage = true;
				setTimeout(() => (showMessage = false), 1500);
			}
		},
		hideMessage() {
			showMessage = false;
		}
	};
}

export default createWishlistButtonState;
