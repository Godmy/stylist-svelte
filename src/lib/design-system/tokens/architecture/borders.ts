/**
 * Токены границ - Ширина, стили и радиусы границ
 *
 * @example
 * ```ts
 * import { borderWidth, borderStyle } from '$stylist/design-system/tokens';
 *
 * const cardStyle = {
 *   borderWidth: borderWidth[1],
 *   borderStyle: borderStyle.solid,
 *   borderColor: 'var(--color-border-default)'
 * };
 * ```
 */

/**
 * Объект, содержащий значения ширины границ
 * Используется для обеспечения согласованности границ по всему интерфейсу
 *
 * @property {string} 0 - Без границы
 * @property {string} 1 - Тонкая граница (1px)
 * @property {string} 2 - Средняя граница (2px)
 * @property {string} 4 - Жирная граница (4px)
 * @property {string} 8 - Очень жирная граница (8px)
 */
export const borderWidth = {
	0: '0',
	1: '1px',
	2: '2px',
	4: '4px',
	8: '8px'
} as const;

/**
 * Тип, представляющий возможные ключи ширины границ
 */
export type BorderWidthKey = keyof typeof borderWidth;

/**
 * Объект, содержащий стили границ
 * Используется для задания различных стилей линий границ
 *
 * @property {string} solid - Сплошная линия
 * @property {string} dashed - Пунктирная линия
 * @property {string} dotted - Точечная линия
 * @property {string} double - Двойная линия
 * @property {string} none - Без границы
 */
export const borderStyle = {
	solid: 'solid',
	dashed: 'dashed',
	dotted: 'dotted',
	double: 'double',
	none: 'none'
} as const;

/**
 * Тип, представляющий возможные стили границ
 */
export type BorderStyle = (typeof borderStyle)[keyof typeof borderStyle];

/**
 * Объект, объединяющий все токены границ
 * Предоставляет единый доступ ко всем свойствам границ
 */
export const borders = {
	width: borderWidth,
	style: borderStyle
} as const;
