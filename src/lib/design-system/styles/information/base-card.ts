import { BASE_CLASSES } from '../../runtime/foundation';
import { VARIANT_CLASSES } from '../interaction/interaction';
import { cn } from '../../utils/cn/index';

const BASE_CARD_BASE_CLASSES = `${BASE_CLASSES.card} bg-[--color-background-primary] overflow-hidden`;

const BASE_CARD_VARIANT_CLASSES = {
	...VARIANT_CLASSES,
	outline: 'bg-transparent',
	ghost: 'bg-transparent border-none shadow-none'
} as const;

const BASE_CARD_SIZE_CLASSES = {
	sm: 'p-3',
	md: 'p-4',
	lg: 'p-6'
} as const;

export class BaseCardStyleManager {
  static getClasses(
    variant: keyof typeof BASE_CARD_VARIANT_CLASSES = 'default',
    size: keyof typeof BASE_CARD_SIZE_CLASSES = 'md',
    className = ''
  ): string {
    return cn(
      BASE_CARD_BASE_CLASSES,
      BASE_CARD_VARIANT_CLASSES[variant],
      BASE_CARD_SIZE_CLASSES[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }
}
