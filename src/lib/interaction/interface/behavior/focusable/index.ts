import type { FocusContract } from '$stylist/interaction/type/struct/gesture-focus-contract';
import type { GestureContract } from '$stylist/interaction/type/struct/gesture/gesture-contract';

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
