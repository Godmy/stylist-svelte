import type { FocusContract, GestureContract } from '$stylist/interaction/type/struct/gesture';
import type { Snippet } from 'svelte';

/**
 * Прото-интерфейс для focusable элементов
 */
export interface IFocusable extends Partial<GestureContract> {
	/** Обработчик фокуса */
	onFocus?: (event: FocusEvent) => void;
	/** Обработчик потери фокуса */
	onBlur?: (event: FocusEvent) => void;
	/** Эффект фокуса */
	focusEffect?: boolean;
}

/**
 * Props для focusable компонента
 */
export interface FocusProps extends IFocusable {
	class?: string;
	children?: Snippet;
}
