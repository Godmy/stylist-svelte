/** Клик по элементу bar/chart item с типизированным payload. */
export interface IBarClickable<TItem> {
	onBarClick?: (item: TItem) => void;
}
