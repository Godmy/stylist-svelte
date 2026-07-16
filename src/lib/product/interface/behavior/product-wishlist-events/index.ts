export interface BehaviorProductWishlistEvents {
	onRemove?: (id: string) => void;
	onMoveToCart?: (id: string) => void;
}
