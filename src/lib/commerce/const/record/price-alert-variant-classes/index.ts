import type { TokenMonitoringType } from '$stylist/commerce/type/alias/monitoring-type';

export const PRICE_ALERT_VARIANT_CLASSES: Record<TokenMonitoringType, string> = {
	monitoring: 'border-[--color-info-200] bg-[--color-info-50]',
	reached: 'border-[--color-success-200] bg-[--color-success-50]',
	exceeded: 'border-[--color-danger-200] bg-[--color-danger-50]'
} as const;
