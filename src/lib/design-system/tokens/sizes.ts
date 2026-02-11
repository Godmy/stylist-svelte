/**
 * Шкалы размеров компонентов
 * Определяет шкалы размеров для различных типов компонентов и их связанную размерную информацию
 *
 * @example
 * ```ts
 * import { COMPONENT_SIZE_SCALE } from '$stylist/design-system/tokens';
 *
 * const scale = COMPONENT_SIZE_SCALE; // ['sm', 'md', 'lg', 'xl']
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
 * Шкала размеров для блоков кода - содержит ограниченный набор размеров
 *
 * @example
 * ```ts
 * const codeScale = CODE_BLOCK_SIZE_SCALE; // ['sm', 'md', 'lg']
 * ```
 */
export const CODE_BLOCK_SIZE_SCALE = ['sm', 'md', 'lg'] as const;
export type CodeBlockSize = (typeof CODE_BLOCK_SIZE_SCALE)[number];

/**
 * Шкала размеров для меток - содержит ограниченный набор размеров
 *
 * @example
 * ```ts
 * const labelScale = LABEL_SIZE_SCALE; // ['sm', 'md', 'lg']
 * ```
 */
export const LABEL_SIZE_SCALE = ['sm', 'md', 'lg'] as const;
export type LabelSize = (typeof LABEL_SIZE_SCALE)[number];

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
 * Размеры для флага страны (в пикселях).
 * Используется как числовое значение, без ограниченной шкалы.
 */
export type CountryFlagSize = number;

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
	codeBlock: CODE_BLOCK_SIZE_SCALE,
	label: LABEL_SIZE_SCALE,
	extended: EXTENDED_SIZE_SCALE
} as const;
