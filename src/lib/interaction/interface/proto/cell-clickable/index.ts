/** Клик по ячейке или heatmap cell с типизированным payload. */
export interface ICellClickable<TItem> {
	onCellClick?: (item: TItem) => void;
}
