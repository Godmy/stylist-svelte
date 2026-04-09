import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';
import { PRICE_ALERT_VARIANT_CLASSES } from '$stylist/commerce/const/record/price-alert-variant-classes';

const PRICE_ALERT_BASE_CLASSES = `${StyleManagerBase.classes.card} p-4`;

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
    return mergeClassNames(
      PRICE_ALERT_BASE_CLASSES,
      PRICE_ALERT_VARIANT_CLASSES[variant],
      PRICE_ALERT_SIZE_CLASSES[size],
      className
    );
  }

  static getContainerClasses(className = ''): string {
    return mergeClassNames('flex items-center justify-center', className);
  }
}

