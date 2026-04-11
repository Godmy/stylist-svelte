import type { MotionContract } from '..';

/**
 * Контракт для анимированных значений
 */
export type AnimateContract = MotionContract & {
	/** Начальное значение */
	from: number;
	/** Конечное значение */
	to: number;
	/** Форматирование значения */
	format?: (value: number) => string;
}
