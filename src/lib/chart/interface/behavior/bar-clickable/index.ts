/** Клик по элементу bar/chart item с типизированным payload. */
export interface BehaviorBarClickable<TItem> {
	onBarClick?: (item: TItem) => void;
}
