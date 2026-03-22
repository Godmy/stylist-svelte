export const TOKEN_ORDER_STATUS = [
	'pending',
	'cancelled',
	'processing',
	'shipped',
	'delivered'
] as const;

export type TokenOrderStatus = (typeof TOKEN_ORDER_STATUS)[number];
