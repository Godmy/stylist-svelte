import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';
import { PRICE_ALERT_VARIANT_CLASSES } from '$stylist/commerce/const/record/price-alert-variant-classes';
import { PRICE_ALERT_SIZE_CLASSES } from '$stylist/commerce/const/map/price-alert-size-classes';
import { PRICE_ALERT_BASE_CLASSES } from '$stylist/commerce/const/value/price-alert-base-classes';

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

