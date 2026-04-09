/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { ClickContract } from './click-contract';
export type { DragContract } from './drag-contract';
export type { FocusContract } from './focus-contract';
export type { HoverContract } from './hover-contract';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { TokenAnimation } from '$stylist/interaction/type/enum/animation';
import type { TokenDuration } from '$stylist/interaction/type/enum/duration';
import type { TokenEasing } from '$stylist/interaction/type/enum/easing';
import type { TokenCursor } from '$stylist/interaction/type/enum/cursor';

/**
 * Базовый контракт для всех жестов
 */
export interface GestureContract {
	/** Отключает взаимодействие */
	disabled: boolean;
	/** Токен анимации */
	animation: TokenAnimation;
	/** Токен длительности */
	duration: TokenDuration;
	/** Токен easing функции */
	easing: TokenEasing;
	/** Токен курсора */
	cursor: TokenCursor;
	/** Эффект нажатия */
	pressEffect: boolean;
	/** Эффект наведения */
	hoverEffect: boolean;
}