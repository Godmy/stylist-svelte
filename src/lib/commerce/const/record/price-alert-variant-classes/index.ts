import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';

export const PRICE_ALERT_VARIANT_CLASSES: Record<TokenMonitoringType, string> = {
	...InteractionStyleManager.getVariantClassMap(),
	monitoring: 'border-[--color-info-200] bg-[--color-info-50]',
	reached: 'border-[--color-success-200] bg-[--color-success-50]',
	exceeded: 'border-[--color-danger-200] bg-[--color-danger-50]'
} as const;
