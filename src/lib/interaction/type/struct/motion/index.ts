/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { AnimateContract } from './animate-contract';
export type { TransformContract } from './transform-contract';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

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