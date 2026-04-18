/** Клик по ячейке или heatmap cell с типизированным payload. */
export interface BehaviorCellClickable<TItem> {
	onCellClick?: (item: TItem) => void;
}
