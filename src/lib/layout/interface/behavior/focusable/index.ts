import type { GestureContract } from '$stylist/layout/interface/slot/gesture-contract';
/**
 * Прото-интерфейс для focusable элементов
 */
export interface BehaviorFocusable extends Partial<GestureContract> {
	/** Обработчик фокуса */
	onFocus?: (event: FocusEvent) => void;
	/** Обработчик потери фокуса */
	onBlur?: (event: FocusEvent) => void;
	/** Эффект фокуса */
	focusEffect?: boolean;
}
