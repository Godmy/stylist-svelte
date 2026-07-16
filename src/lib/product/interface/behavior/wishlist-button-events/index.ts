export interface BehaviorWishlistButtonEvents {
	onToggle?: (inWishlist: boolean) => void;
	onSuccess?: () => void;
	onError?: (error: string) => void;
}
