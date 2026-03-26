import type { HtmlAttributesBase } from '$stylist/information/type/attribute/common';
import type { TokenBillingItem } from '$stylist/architecture/type/token/billing-item';
import type { TokenOrderStatus } from '$stylist/architecture/type/token/order-status';

export interface IOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  variant?: string;
  thumbnail?: string;
}

export interface IShippingAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface IOrderConfirmationPaymentInfo {
  method: string;
  lastFour?: string;
  status: TokenBillingItem;
}

export interface IOrderConfirmationEvents {
  onDownloadInvoice?: () => void;
  onShareOrder?: () => void;
  onContinueShopping?: () => void;
  onTrackOrder?: () => void;
}

export interface IOrderConfirmationProps extends HtmlAttributesBase<HTMLDivElement>, IOrderConfirmationEvents {
  orderId: string;
  orderDate: Date;
  items: IOrderItem[];
  total: number;
  shippingAddress: IShippingAddress;
  paymentInfo: IOrderConfirmationPaymentInfo;
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

