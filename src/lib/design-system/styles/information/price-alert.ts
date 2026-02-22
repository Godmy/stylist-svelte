import {
  PRICE_ALERT_BASE_CLASSES,
  PRICE_ALERT_SIZE_CLASSES,
  PRICE_ALERT_VARIANT_CLASSES
} from '../../classes/information/price-alert';
import { cn } from '../../utils/cn/index';

export class PriceAlertStyleManager {
  static getClasses(
    variant: keyof typeof PRICE_ALERT_VARIANT_CLASSES = 'monitoring',
    size: keyof typeof PRICE_ALERT_SIZE_CLASSES = 'md',
    className = ''
  ): string {
    return cn(
      PRICE_ALERT_BASE_CLASSES,
      PRICE_ALERT_VARIANT_CLASSES[variant],
      PRICE_ALERT_SIZE_CLASSES[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }
}
