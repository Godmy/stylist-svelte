import type { MotionContract } from '$stylist/animation/type/struct/motion/motion-contract';

/**
 * Прото-интерфейс для анимированных элементов
 */
export interface BehaviorAnimate extends Partial<MotionContract> {
	/** Начальное значение */
	from?: number;
	/** Конечное значение */
	to?: number;
	/** Форматирование значения */
	format?: (value: number) => string;
}
