/**
 * Шкалы размеров компонентов
 * Определяет шкалы размеров для различных типов компонентов и их связанную размерную информацию
 */

/**
 * Стандартная шкала размеров компонентов - используется большинством интерактивных компонентов
 */
export const COMPONENT_SIZE_SCALE = ['sm', 'md', 'lg', 'xl'] as const;
export type ComponentSize = typeof COMPONENT_SIZE_SCALE[number];

/**
 * Компактная шкала размеров - для компонентов, которым требуется меньше вариантов размеров
 */
export const COMPACT_SIZE_SCALE = ['sm', 'md', 'lg'] as const;
export type CompactSize = typeof COMPACT_SIZE_SCALE[number];

/**
 * Расширенная шкала размеров - для компонентов, требующих более детального контроля размеров
 */
export const EXTENDED_SIZE_SCALE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type ExtendedSize = typeof EXTENDED_SIZE_SCALE[number];

/**
 * Все шкалы размеров
 */
export const SIZE_SCALES = {
  component: COMPONENT_SIZE_SCALE,
  compact: COMPACT_SIZE_SCALE,
  extended: EXTENDED_SIZE_SCALE
} as const;

/**
 * Сопоставления внутренних отступов для размеров компонентов
 * Используется для кнопок, полей ввода и других интерактивных элементов
 */
export const PADDING_SIZES: Record<ComponentSize, string> = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-6 py-3',
  xl: 'px-7 py-3.5'
};

/**
 * Сопоставления размеров текста, согласованные с размерами компонентов
 */
export const TEXT_SIZES: Record<ComponentSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

/**
 * Сопоставления размеров иконок/загрузчиков
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
 */
export const SIZE_CLASSES: Record<ComponentSize, string> = {
  sm: `${PADDING_SIZES.sm} ${TEXT_SIZES.sm}`,
  md: `${PADDING_SIZES.md} ${TEXT_SIZES.md}`,
  lg: `${PADDING_SIZES.lg} ${TEXT_SIZES.lg}`,
  xl: `${PADDING_SIZES.xl} ${TEXT_SIZES.xl}`
};
