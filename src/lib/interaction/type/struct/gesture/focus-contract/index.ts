import type { GestureContract } from '..';

/**
 * Контракт для focusable элементов
 */
export interface FocusContract extends GestureContract {
	/** Обработчик фокуса */
	onFocus?: (event: FocusEvent) => void;
	/** Обработчик потери фокуса */
	onBlur?: (event: FocusEvent) => void;
}
