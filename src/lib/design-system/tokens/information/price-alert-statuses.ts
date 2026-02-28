/** Price alert status tokens */
export const PRICE_ALERT_STATUSES = ['monitoring', 'reached', 'exceeded'] as const;

export type PriceAlertStatus = (typeof PRICE_ALERT_STATUSES)[number];
export type PriceAlertVariant = PriceAlertStatus;
