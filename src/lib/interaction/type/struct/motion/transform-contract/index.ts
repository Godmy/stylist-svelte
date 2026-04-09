import type { MotionContract } from '..';

/**
 * Контракт для трансформации
 */
export interface TransformContract extends MotionContract {
	/** Масштаб */
	scale: number;
	/** Вращение (градусы) */
	rotate: number;
	/** Смещение по X */
	translateX: number;
	/** Смещение по Y */
	translateY: number;
	/** Наклон по X */
	skewX: number;
	/** Наклон по Y */
	skewY: number;
	/** Точка трансформации */
	transformOrigin: string;
}
