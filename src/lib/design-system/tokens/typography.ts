/**
 * Типографские токены - Размеры шрифта, насыщенность и высота строк
 *
 * @example
 * ```ts
 * import { fontSize, fontWeight, lineHeight, fontFamily } from '$stylist/design-system/tokens';
 *
 * const textStyle = {
 *   fontSize: fontSize.md,
 *   fontWeight: fontWeight.medium,
 *   lineHeight: lineHeight.tight,
 *   fontFamily: fontFamily.sans
 * };
 * ```
 */

/**
 * Объект, содержащий значения размеров шрифта
 * Используется для обеспечения согласованности типографики в интерфейсе
 *
 * @property {string} xs - Очень маленький размер шрифта (12px)
 * @property {string} sm - Маленький размер шрифта (14px)
 * @property {string} base - Базовый размер шрифта (16px)
 * @property {string} lg - Большой размер шрифта (18px)
 * @property {string} xl - Очень большой размер шрифта (20px)
 * @property {string} 2xl - Огромный размер шрифта (24px)
 * @property {string} 3xl - Гигантский размер шрифта (30px)
 * @property {string} 4xl - Колossal размер шрифта (36px)
 * @property {string} 5xl - Эпический размер шрифта (48px)
 * @property {string} 6xl - Легендарный размер шрифта (60px)
 * @property {string} 7xl - Мифический размер шрифта (72px)
 */
export const fontSize = {
	xs: '0.75rem', // 12px
	sm: '0.875rem', // 14px
	base: '1rem', // 16px
	lg: '1.125rem', // 18px
	xl: '1.25rem', // 20px
	'2xl': '1.5rem', // 24px
	'3xl': '1.875rem', // 30px
	'4xl': '2.25rem', // 36px
	'5xl': '3rem', // 48px
	'6xl': '3.75rem', // 60px
	'7xl': '4.5rem' // 72px
} as const;

/**
 * Объект, содержащий значения насыщенности шрифта
 * Используется для задания различной насыщенности текста
 *
 * @property {string} thin - Очень тонкий (100)
 * @property {string} extralight - Экстра светлый (200)
 * @property {string} light - Светлый (300)
 * @property {string} normal - Нормальный (400)
 * @property {string} medium - Средний (500)
 * @property {string} semibold - Полужирный (600)
 * @property {string} bold - Жирный (700)
 * @property {string} extrabold - Экстра жирный (800)
 * @property {string} black - Черный (900)
 */
export const fontWeight = {
	thin: '100',
	extralight: '200',
	light: '300',
	normal: '400',
	medium: '500',
	semibold: '600',
	bold: '700',
	extrabold: '800',
	black: '900'
} as const;

/**
 * Объект, содержащий значения высоты строк
 * Используется для управления вертикальным пространством между строками текста
 *
 * @property {string} none - Без межстрочного интервала (1)
 * @property {string} tight - Тесный интервал (1.25)
 * @property {string} snug - Уютный интервал (1.375)
 * @property {string} normal - Нормальный интервал (1.5)
 * @property {string} relaxed - Расслабленный интервал (1.625)
 * @property {string} loose - Свободный интервал (2)
 */
export const lineHeight = {
	none: '1',
	tight: '1.25',
	snug: '1.375',
	normal: '1.5',
	relaxed: '1.625',
	loose: '2'
} as const;

/**
 * Объект, содержащий семейства шрифтов
 * Используется для определения основных семейств шрифтов в интерфейсе
 *
 * @property {string} sans - Шрифт без засечек
 * @property {string} serif - Шрифт с засечками
 * @property {string} mono - Моноширинный шрифт
 */
export const fontFamily = {
	sans: 'Inter, system-ui, -apple-system, sans-serif',
	serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
	mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
} as const;

/**
 * Объект, объединяющий все типографские токены
 * Предоставляет единый доступ ко всем типографским свойствам
 */
export const typography = {
	fontSize,
	fontWeight,
	lineHeight,
	fontFamily
} as const;

/**
 * Тип, представляющий возможные ключи размеров шрифта
 * Используется для типизации при работе с размерами шрифта
 */
export type FontSizeKey = keyof typeof fontSize;

/**
 * Тип, представляющий возможные ключи насыщенности шрифта
 * Используется для типизации при работе с насыщенностью шрифта
 */
export type FontWeightKey = keyof typeof fontWeight;

/**
 * Тип, представляющий возможные ключи высоты строк
 * Используется для типизации при работе с высотой строк
 */
export type LineHeightKey = keyof typeof lineHeight;

/**
 * Тип, представляющий возможные ключи семейств шрифтов
 * Используется для типизации при работе с семействами шрифтов
 */
export type FontFamilyKey = keyof typeof fontFamily;
