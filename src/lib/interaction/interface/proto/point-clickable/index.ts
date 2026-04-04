/** Клик по точке графика с типизированным payload и опциональным контекстом серии. */
export interface IPointClickable<TPoint, TContext = void> {
	onPointClick?: (item: TPoint, context?: TContext) => void;
}
