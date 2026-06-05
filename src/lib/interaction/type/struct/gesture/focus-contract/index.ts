import type { GestureContract } from '$stylist/interaction/type/struct/gesture/gesture-contract';

/**
 * Контракт для focusable элементов
 */
export type FocusContract = GestureContract & {
	/** Обработчик фокуса */
	onFocus?: (event: FocusEvent) => void;
	/** Обработчик потери фокуса */
	onBlur?: (event: FocusEvent) => void;
};
