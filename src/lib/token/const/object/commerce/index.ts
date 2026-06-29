import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_BILLING_ITEM } from '$stylist/commerce/const/array/billing-item';
import { TOKEN_BILLING_SUMMARY } from '$stylist/commerce/const/array/billing-summary';
import { DISCOUNT_TYPE } from '$stylist/commerce/const/array/discount-type';
import { INVENTORY_ITEM_STATUS } from '$stylist/commerce/const/array/inventory-item-status';
import { TOKEN_MONITORING_TYPE } from '$stylist/commerce/const/array/monitoring-type';
import { TOKEN_ORDER_STATUS } from '$stylist/commerce/const/array/order-status';
import { TOKEN_PAYMENT_METHOD } from '$stylist/commerce/const/array/payment-method';
import { TOKEN_PAYMENT_STATUS } from '$stylist/commerce/const/array/payment-status';
import { SUBSCRIPTION_STATUS } from '$stylist/commerce/const/array/subscription-status';
import { WARRANTY_PERIOD_TYPE } from '$stylist/commerce/const/array/warranty-period-type';

export const TOKEN_COMMERCE_SETTING = [
	{ key: 'billing-item', label: 'Billing Item', domain: 'commerce', controlKind: 'radio', values: TOKEN_BILLING_ITEM },
	{ key: 'billing-summary', label: 'Billing Summary', domain: 'commerce', controlKind: 'radio', values: TOKEN_BILLING_SUMMARY },
	{ key: 'discount-type', label: 'Discount Type', domain: 'commerce', controlKind: 'radio', values: DISCOUNT_TYPE },
	{ key: 'inventory-item-status', label: 'Inventory Item Status', domain: 'commerce', controlKind: 'radio', values: INVENTORY_ITEM_STATUS },
	{ key: 'monitoring-type', label: 'Monitoring Type', domain: 'commerce', controlKind: 'radio', values: TOKEN_MONITORING_TYPE },
	{ key: 'order-status', label: 'Order Status', domain: 'commerce', controlKind: 'radio', values: TOKEN_ORDER_STATUS },
	{ key: 'payment-method', label: 'Payment Method', domain: 'commerce', controlKind: 'radio', values: TOKEN_PAYMENT_METHOD },
	{ key: 'payment-status', label: 'Payment Status', domain: 'commerce', controlKind: 'radio', values: TOKEN_PAYMENT_STATUS },
	{ key: 'subscription-status', label: 'Subscription Status', domain: 'commerce', controlKind: 'radio', values: SUBSCRIPTION_STATUS },
	{ key: 'warranty-period-type', label: 'Warranty Period Type', domain: 'commerce', controlKind: 'radio', values: WARRANTY_PERIOD_TYPE }
] satisfies readonly Token[];