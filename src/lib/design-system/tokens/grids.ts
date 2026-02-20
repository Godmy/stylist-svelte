/**
 * Токены гридов - Колонки и отступы для сеточных макетов
 *
 * @example
 * ```ts
 * import { gridColumns, gridGaps } from '$stylist/design-system/tokens';
 *
 * const dashboardGrid = {
 *   gridTemplateColumns: gridColumns[12],
 *   gap: gridGaps[6]
 * };
 * ```
 */

/**
 * Объект, содержащий значения колонок грида
 * Используется для создания сеточных макетов
 *
 * @property {string} 1 - Одна колонка
 * @property {string} 2 - Две колонки
 * @property {string} 3 - Три колонки
 * @property {string} 4 - Четыре колонки
 * @property {string} 6 - Шесть колонок
 * @property {string} 12 - Двенадцать колонок (стандарт)
 * @property {string} auto - Автоматические колонки
 */
export const gridColumns = {
	1: 'repeat(1, minmax(0, 1fr))',
	2: 'repeat(2, minmax(0, 1fr))',
	3: 'repeat(3, minmax(0, 1fr))',
	4: 'repeat(4, minmax(0, 1fr))',
	6: 'repeat(6, minmax(0, 1fr))',
	12: 'repeat(12, minmax(0, 1fr))',
	auto: 'repeat(auto-fit, minmax(0, 1fr))'
} as const;

/**
 * Тип, представляющий возможные ключи колонок грида
 */
export type GridColumnsKey = keyof typeof gridColumns;

/**
 * Объект, содержащий значения отступов между ячейками грида
 * Используется для задания расстояния между элементами сетки
 *
 * @property {string} 0 - Без отступа
 * @property {string} 2 - Маленький отступ (0.5rem / 8px)
 * @property {string} 4 - Средний отступ (1rem / 16px)
 * @property {string} 6 - Большой отступ (1.5rem / 24px)
 * @property {string} 8 - Очень большой отступ (2rem / 32px)
 * @property {string} 12 - Экстра большой отступ (3rem / 48px)
 */
export const gridGaps = {
	0: '0',
	2: '0.5rem',
	4: '1rem',
	6: '1.5rem',
	8: '2rem',
	12: '3rem'
} as const;

/**
 * Тип, представляющий возможные ключи отступов грида
 */
export type GridGapKey = keyof typeof gridGaps;

/**
 * Объект, объединяющий все токены гридов
 */
export const grids = {
	columns: gridColumns,
	gaps: gridGaps
} as const;
