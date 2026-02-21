/**
 * Токены анимаций - Задержки и функции времени
 *
 * @example
 * ```ts
 * import { animationDelay, animationTiming } from '$stylist/design-system/tokens';
 *
 * const staggeredAnimation = {
 *   animationDelay: animationDelay[100],
 *   animationTimingFunction: animationTiming.easeOut
 * };
 * ```
 */

/**
 * Объект, содержащий значения задержек анимации
 * Используется для каскадных и последовательных анимаций
 *
 * @property {string} 0 - Без задержки
 * @property {string} 75 - Очень короткая задержка (75ms)
 * @property {string} 100 - Короткая задержка (100ms)
 * @property {string} 150 - Средняя задержка (150ms)
 * @property {string} 200 - Стандартная задержка (200ms)
 * @property {string} 300 - Длинная задержка (300ms)
 * @property {string} 500 - Очень длинная задержка (500ms)
 * @property {string} 700 - Экстра длинная задержка (700ms)
 * @property {string} 1000 - Максимальная задержка (1000ms)
 */
export const animationDelay = {
	0: '0ms',
	75: '75ms',
	100: '100ms',
	150: '150ms',
	200: '200ms',
	300: '300ms',
	500: '500ms',
	700: '700ms',
	1000: '1000ms'
} as const;

/**
 * Тип, представляющий возможные ключи задержек анимации
 */
export type AnimationDelayKey = keyof typeof animationDelay;

/**
 * Объект, содержащий функции времени анимации (easing functions)
 * Используется для управления ускорением и замедлением анимации
 *
 * @property {string} linear - Линейная (равномерная скорость)
 * @property {string} ease - Стандартная (плавное начало и конец)
 * @property {string} easeIn - Плавное начало (ускорение)
 * @property {string} easeOut - Плавный конец (замедление)
 * @property {string} easeInOut - Плавное начало и конец
 * @property {string} stepStart - Мгновенное начало
 * @property {string} stepEnd - Мгновенный конец
 */
export const animationTiming = {
	linear: 'linear',
	ease: 'ease',
	easeIn: 'ease-in',
	easeOut: 'ease-out',
	easeInOut: 'ease-in-out',
	stepStart: 'step-start',
	stepEnd: 'step-end'
} as const;

/**
 * Тип, представляющий возможные функции времени анимации
 */
export type AnimationTiming = (typeof animationTiming)[keyof typeof animationTiming];

/**
 * Объект, объединяющий все токены анимаций
 */
export const animations = {
	delay: animationDelay,
	timing: animationTiming
} as const;
