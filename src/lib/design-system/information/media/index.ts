/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */
// Медиа-компоненты (иконки, аватарки, изображения)

// Размеры для медиа-компонентов
export const MEDIA_SIZE_SCALE = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
  '2xl': 'w-16 h-16',
  '3xl': 'w-20 h-20',
  '4xl': 'w-24 h-24'
} as const;

// Экспортируем для использования в других модулях
export type MediaSize = keyof typeof MEDIA_SIZE_SCALE;

// Типы для пропсов
export type Props = {
  variant?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  ariaLabel?: string;
  class?: string;
};