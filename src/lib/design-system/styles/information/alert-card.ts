import {
  ALERT_CARD_BASE_CLASSES,
  ALERT_CARD_SIZE_CLASSES,
  ALERT_CARD_VARIANT_CLASSES
} from '../../classes/information/alert-card';
import { ALERT_CARD_DEFAULTS } from '../../presets/alert-card';
import { cn } from '../../utils/cn/index';

export class AlertCardStyleManager {
  static getClasses(
    variant: keyof typeof ALERT_CARD_VARIANT_CLASSES = ALERT_CARD_DEFAULTS.variant,
    size: keyof typeof ALERT_CARD_SIZE_CLASSES = ALERT_CARD_DEFAULTS.size,
    className = ''
  ): string {
    return cn(
      ALERT_CARD_BASE_CLASSES,
      ALERT_CARD_VARIANT_CLASSES[variant],
      ALERT_CARD_SIZE_CLASSES[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return cn('flex items-center justify-center', className);
  }
}