import { BASE_CLASSES } from '$stylist/design-system/runtime/foundation';
import { InteractionStyleManager } from '$stylist/design-system/styles/interaction/interaction';
import { cn } from '$stylist/design-system/utils/cn/index';
import type { TokenMonitoringType } from '$stylist/design-system/tokens/interaction/monitoring-type';

const PRICE_ALERT_BASE_CLASSES = `${BASE_CLASSES.card} p-4`;

const PRICE_ALERT_VARIANT_CLASSES: Record<TokenMonitoringType, string> = {
	...InteractionStyleManager.getVariantClassMap(),
	monitoring: 'border-[--color-info-200] bg-[--color-info-50]',
	reached: 'border-[--color-success-200] bg-[--color-success-50]',
	exceeded: 'border-[--color-danger-200] bg-[--color-danger-50]'
} as const;

const PRICE_ALERT_SIZE_CLASSES = {
	sm: 'p-2 text-sm',
	md: 'p-4 text-base',
	lg: 'p-6 text-lg'
} as const;





export class PriceAlertStyleManager {
  static getClasses(
    variant: TokenMonitoringType = 'monitoring',
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
