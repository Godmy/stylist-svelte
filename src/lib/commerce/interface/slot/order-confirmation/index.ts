import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { TokenOrderStatus } from '$stylist/commerce/type/enum/order-status';
import type { SlotOrderItem } from '$stylist/commerce/interface/slot/order-item';
import type { SlotShippingAddress } from '$stylist/commerce/interface/slot/shipping-address';
import type { SlotOrderConfirmationPaymentInfo } from '$stylist/commerce/interface/slot/order-confirmation-payment-info';
import type { SlotOrderConfirmationEvents } from '$stylist/commerce/interface/slot/order-confirmation-events';

export interface SlotOrderConfirmation extends HtmlAttributesBase<HTMLDivElement>, SlotOrderConfirmationEvents {
  orderId: string;
  orderDate: Date;
  items: SlotOrderItem[];
  total: number;
  shippingAddress: SlotShippingAddress;
  paymentInfo: SlotOrderConfirmationPaymentInfo;
  estimatedDelivery?: Date;
  trackingNumber?: string;
  orderStatus?: TokenOrderStatus;
  shippingCost?: number;
  taxAmount?: number;
  class?: string;
  headerClass?: string;
  summaryClass?: string;
  itemClass?: string;
  addressClass?: string;
  actionsClass?: string;
  showDownloadInvoice?: boolean;
  showShareOrder?: boolean;
  currency?: string;
  locale?: string;
}
