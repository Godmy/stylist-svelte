/**
 * Шкала отступов - Последовательные значения отступов
 * Основана на базовой единице 4px (0.25rem)
 *
 * @example
 * ```ts
 * import { spacing } from '$stylist/design-system/tokens';
 *
 * const smallPadding = spacing[2]; // '0.5rem'
 * const largeMargin = spacing[8];  // '2rem'
 * ```
 */

/**
 * Объект, содержащий значения отступов
 * Используется для обеспечения последовательности отступов по всему интерфейсу
 *
 * @property {string} 0 - Нулевой отступ
 * @property {string} 1 - Маленький отступ (4px)
 * @property {string} 2 - Малый отступ (8px)
 * @property {string} 3 - Средний малый отступ (12px)
 * @property {string} 4 - Средний отступ (16px)
 * @property {string} 5 - Средний большой отступ (20px)
 * @property {string} 6 - Большой отступ (24px)
 * @property {string} 8 - Очень большой отступ (32px)
 * @property {string} 10 - Экстра отступ (40px)
 * @property {string} 12 - Супер отступ (48px)
 * @property {string} 16 - Гигантский отступ (64px)
 * @property {string} 20 - Огромный отступ (80px)
 * @property {string} 24 - Колоссальный отступ (96px)
 * @property {string} 32 - Максимальный отступ (128px)
 * @property {string} 40 - Сверхмаксимальный отступ (160px)
 * @property {string} 48 - Ультрамаксимальный отступ (192px)
 * @property {string} 56 - Экстремальный отступ (224px)
 * @property {string} 64 - Абсолютный отступ (256px)
 */
export const spacing = {
	0: '0',
	1: '0.25rem', // 4px
	2: '0.5rem', // 8px
	3: '0.75rem', // 12px
	4: '1rem', // 16px
	5: '1.25rem', // 20px
	6: '1.5rem', // 24px
	8: '2rem', // 32px
	10: '2.5rem', // 40px
	12: '3rem', // 48px
	16: '4rem', // 64px
	20: '5rem', // 80px
	24: '6rem', // 96px
	32: '8rem', // 128px
	40: '10rem', // 160px
	48: '12rem', // 192px
	56: '14rem', // 224px
	64: '16rem' // 256px
} as const;

/**
 * Тип, представляющий возможные ключи шкалы отступов
 * Используется для типизации при работе с отступами
 */
export type SpacingKey = keyof typeof spacing;
