import type { TokenAnimation } from '$stylist/animation/type/enum/animation';
import type { TokenDuration } from '$stylist/animation/type/enum/duration';
import type { TokenEasing } from '$stylist/animation/type/enum/easing';

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