import type { HtmlAttributesBase } from './common';

export type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'paid' | 'pending' | 'failed';

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  variant?: string;
  thumbnail?: string;
};

export type ShippingAddress = {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type OrderConfirmationPaymentInfo = {
  method: string;
  lastFour?: string;
  status: PaymentStatus;
};

export type IOrderConfirmationEvents = {
  onDownloadInvoice?: () => void;
  onShareOrder?: () => void;
  onContinueShopping?: () => void;
  onTrackOrder?: () => void;
};

export type IOrderConfirmationProps = HtmlAttributesBase<HTMLDivElement> & {
  orderId: string;
  orderDate: Date;
  items: OrderItem[];
  total: number;
  shippingAddress: ShippingAddress;
  paymentInfo: OrderConfirmationPaymentInfo;
  estimatedDelivery?: Date;
  trackingNumber?: string;
  orderStatus?: OrderStatus;
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
} & IOrderConfirmationEvents;
