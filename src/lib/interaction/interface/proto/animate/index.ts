import type { AnimateContract, MotionContract } from '$stylist/interaction/type/struct/motion';
import type { Snippet } from 'svelte';

/**
 * Прото-интерфейс для анимированных элементов
 */
export interface IAnimate extends Partial<MotionContract> {
	/** Начальное значение */
	from?: number;
	/** Конечное значение */
	to?: number;
	/** Форматирование значения */
	format?: (value: number) => string;
}

/**
 * Props для animate компонента
 */
export interface AnimateProps extends IAnimate {
	class?: string;
	children?: Snippet;
}
