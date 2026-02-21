/**
 * Токены скругления границ - Значения скругления углов
 *
 * @example
 * ```ts
 * import { borderRadius } from '$stylist/design-system/tokens';
 *
 * const elementRadius = borderRadius.md; // '0.375rem'
 * ```
 */

/**
 * Объект, содержащий значения скругления границ
 * Используется для обеспечения последовательности скруглений углов по всему интерфейсу
 *
 * @property {string} none - Без скругления (0)
 * @property {string} sm - Маленькое скругление (2px)
 * @property {string} base - Базовое скругление (4px)
 * @property {string} md - Среднее скругление (6px)
 * @property {string} lg - Большое скругление (8px)
 * @property {string} xl - Очень большое скругление (12px)
 * @property {string} 2xl - Огромное скругление (16px)
 * @property {string} 3xl - Гигантское скругление (24px)
 * @property {string} full - Полное скругление (круг)
 */
export const borderRadius = {
	none: '0',
	sm: '0.125rem', // 2px
	base: '0.25rem', // 4px
	md: '0.375rem', // 6px
	lg: '0.5rem', // 8px
	xl: '0.75rem', // 12px
	'2xl': '1rem', // 16px
	'3xl': '1.5rem', // 24px
	full: '9999px'
} as const;

/**
 * Тип, представляющий возможные ключи скругления границ
 * Используется для типизации при работе со скруглением границ
 */
export type BorderRadiusKey = keyof typeof borderRadius;
