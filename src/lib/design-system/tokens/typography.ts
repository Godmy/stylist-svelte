/**
 * Типографские токены - Размеры шрифта, насыщенность и высота строк
 */

/**
 * Объект, содержащий значения размеров шрифта
 * Используется для обеспечения согласованности типографики в интерфейсе
 */
export const fontSize = {
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px
  base: '1rem',       // 16px
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
  '7xl': '4.5rem'     // 72px
} as const;

/**
 * Объект, содержащий значения насыщенности шрифта
 * Используется для задания различной насыщенности текста
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
