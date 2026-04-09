import type { MotionContract } from '..';

/**
 * Контракт для анимированных значений
 */
export interface AnimateContract extends MotionContract {
	/** Начальное значение */
	from: number;
	/** Конечное значение */
	to: number;
	/** Форматирование значения */
	format?: (value: number) => string;
}
