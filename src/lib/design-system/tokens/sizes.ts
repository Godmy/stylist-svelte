/**
 * Шкалы размеров компонентов
 * Определяет шкалы размеров для различных типов компонентов и их связанную размерную информацию
 *
 * @example
 * ```ts
 * import { COMPONENT_SIZE_SCALE, SIZE_CLASSES } from '$stylist/design-system/tokens';
 *
 * const sizeClasses = SIZE_CLASSES.md; // 'px-4 py-2 text-base'
 * ```
 */

/**
 * Стандартная шкала размеров компонентов - используется большинством интерактивных компонентов
 *
 * @example
 * ```ts
 * const scale = COMPONENT_SIZE_SCALE; // ['sm', 'md', 'lg', 'xl']
 * ```
 */
export const COMPONENT_SIZE_SCALE = ['sm', 'md', 'lg', 'xl'] as const;
export type ComponentSize = (typeof COMPONENT_SIZE_SCALE)[number];

/**
 * Компактная шкала размеров - для компонентов, которым требуется меньше вариантов размеров
 *
 * @example
 * ```ts
 * const compactScale = COMPACT_SIZE_SCALE; // ['sm', 'md', 'lg']
 * ```
 */
export const COMPACT_SIZE_SCALE = ['sm', 'md', 'lg'] as const;
export type CompactSize = (typeof COMPACT_SIZE_SCALE)[number];

/**
 * Расширенная шкала размеров - для компонентов, требующих более детального контроля размеров
 *
 * @example
 * ```ts
 * const extendedScale = EXTENDED_SIZE_SCALE; // ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
 * ```
 */
export const EXTENDED_SIZE_SCALE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type ExtendedSize = (typeof EXTENDED_SIZE_SCALE)[number];

/**
 * Все шкалы размеров
 *
 * @example
 * ```ts
 * const scales = SIZE_SCALES; // { component: [...], compact: [...], extended: [...] }
 * ```
 */
export const SIZE_SCALES = {
	component: COMPONENT_SIZE_SCALE,
	compact: COMPACT_SIZE_SCALE,
	extended: EXTENDED_SIZE_SCALE
} as const;

/**
 * Сопоставления внутренних отступов для размеров компонентов
 * Используется для кнопок, полей ввода и других интерактивных элементов
 *
 * @example
 * ```ts
 * const padding = PADDING_SIZES.md; // 'px-4 py-2'
 * ```
 */
export const PADDING_SIZES: Record<ComponentSize, string> = {
	sm: 'px-3 py-1.5',
	md: 'px-4 py-2',
	lg: 'px-6 py-3',
	xl: 'px-7 py-3.5'
};

/**
 * Сопоставления размеров текста, согласованные с размерами компонентов
 *
 * @example
 * ```ts
 * const textSize = TEXT_SIZES.md; // 'text-base'
 * ```
 */
export const TEXT_SIZES: Record<ComponentSize, string> = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl'
};

/**
 * Сопоставления размеров иконок/загрузчиков
 *
 * @example
 * ```ts
 * const iconSize = ICON_SIZES.md; // 'w-4 h-4'
 * ```
 */
export const ICON_SIZES: Record<ComponentSize, string> = {
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6'
};

/**
 * Комбинированные классы размеров - внутренние отступы + размер текста
 * Готовые к использованию для размерного форматирования компонентов
 *
 * @example
 * ```ts
 * const sizeClass = SIZE_CLASSES.md; // 'px-4 py-2 text-base'
 * ```
 */
export const SIZE_CLASSES: Record<ComponentSize, string> = {
	sm: `${PADDING_SIZES.sm} ${TEXT_SIZES.sm}`,
	md: `${PADDING_SIZES.md} ${TEXT_SIZES.md}`,
	lg: `${PADDING_SIZES.lg} ${TEXT_SIZES.lg}`,
	xl: `${PADDING_SIZES.xl} ${TEXT_SIZES.xl}`
};
