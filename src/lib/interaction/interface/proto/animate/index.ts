import type { AnimateContract } from '$stylist/interaction/type/struct/motion-animate-contract';
import type { MotionContract } from '$stylist/interaction/type/struct/motion';

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
