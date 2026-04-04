import type { TokenAnimation } from '$stylist/interaction/type/enum/animation';
import type { TokenDuration } from '$stylist/interaction/type/enum/duration';
import type { TokenEasing } from '$stylist/interaction/type/enum/easing';

/**
 * Базовый контракт для motion
 */
export interface MotionContract {
	/** Токен анимации */
	animation: TokenAnimation;
	/** Токен длительности */
	duration: TokenDuration;
	/** Токен easing функции */
	easing: TokenEasing;
	/** Задержка перед началом */
	delay: number;
	/** Бесконечная анимация */
	infinite: boolean;
	/** Направление анимации */
	direction: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
	/** Количество повторений */
	iterations: number | 'infinite';
}

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
