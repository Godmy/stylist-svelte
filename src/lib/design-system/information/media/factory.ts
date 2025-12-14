/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */
import type { MediaPreset } from './preset';
import type { MediaSize } from './index';

// Создает стандартный пресет для медиа-компонента
export function createMediaPreset(): MediaPreset<'default', 'md'> {
  return {
    variants: {
      default: ''
    },
    sizes: {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-12 h-12',
      '2xl': 'w-16 h-16',
      '3xl': 'w-20 h-20',
      '4xl': 'w-24 h-24'
    } as Record<MediaSize, string>,
    defaults: {
      variant: 'default',
      size: 'md',
      disabled: false,
      block: false
    }
  };
}