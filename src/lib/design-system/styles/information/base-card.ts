import {
  BASE_CARD_BASE_CLASSES,
  BASE_CARD_SIZE_CLASSES,
  BASE_CARD_VARIANT_CLASSES
} from '../../classes/information/base-card';
import { cn } from '../../utils/cn/index';

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
