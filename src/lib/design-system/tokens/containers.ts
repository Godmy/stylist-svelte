/**
 * Токены контейнеров - Максимальная ширина и отступы
 *
 * @example
 * ```ts
 * import { containerMaxWidth, containerPadding } from '$stylist/design-system/tokens';
 *
 * const pageContainer = {
 *   maxWidth: containerMaxWidth.xl,
 *   padding: containerPadding.md,
 *   margin: '0 auto'
 * };
 * ```
 */

/**
 * Объект, содержащий значения максимальной ширины контейнеров
 * Используется для ограничения ширины контента на странице
 *
 * @property {string} sm - Маленький контейнер (640px)
 * @property {string} md - Средний контейнер (768px)
 * @property {string} lg - Большой контейнер (1024px)
 * @property {string} xl - Очень большой контейнер (1280px)
 * @property {string} 2xl - Экстра большой контейнер (1536px)
 * @property {string} full - Полная ширина (100%)
 * @property {string} none - Без ограничения (none)
 */
export const containerMaxWidth = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
	full: '100%',
	none: 'none'
} as const;

/**
 * Тип, представляющий возможные ключи максимальной ширины
 */
export type ContainerMaxWidthKey = keyof typeof containerMaxWidth;

/**
 * Объект, содержащий значения отступов для контейнеров
 * Используется для горизонтальных отступов внутри контейнеров
 *
 * @property {string} sm - Маленький отступ (1rem / 16px)
 * @property {string} md - Средний отступ (1.5rem / 24px)
 * @property {string} lg - Большой отступ (2rem / 32px)
 * @property {string} xl - Очень большой отступ (3rem / 48px)
 */
export const containerPadding = {
	sm: '1rem',
	md: '1.5rem',
	lg: '2rem',
	xl: '3rem'
} as const;

/**
 * Тип, представляющий возможные ключи отступов контейнера
 */
export type ContainerPaddingKey = keyof typeof containerPadding;

/**
 * Объект, объединяющий все токены контейнеров
 */
export const containers = {
	maxWidth: containerMaxWidth,
	padding: containerPadding
} as const;
