/**
 * Типы для компонента OrderConfirmation
 * 
 * Этот файл содержит все типы и интерфейсы, используемые в компоненте OrderConfirmation,
 * в соответствии с архитектурой SAMO (SOLID + Atomic Design).
 */

/**
 * @interface OrderItem
 * @description Определяет структуру товара в заказе
 */
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  thumbnail?: string;
  variant?: string;
}

/**
 * @interface ShippingAddress
 * @description Определяет структуру адреса доставки
 */
export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

/**
 * @interface PaymentInfo
 * @description Определяет структуру информации об оплате
 */
export interface OrderConfirmationPaymentInfo {
  method: string;
  lastFour?: string;
  status: 'paid' | 'pending' | 'failed';
}

/**
 * @interface IOrderConfirmationProps
 * @description Пропсы компонента OrderConfirmation
 */
export interface IOrderConfirmationProps {
  orderId: string;
  orderDate: Date;
  items: OrderItem[];
  total: number;
  shippingAddress: ShippingAddress;
  paymentInfo: OrderConfirmationPaymentInfo;
  estimatedDelivery?: Date;
  trackingNumber?: string;
  orderStatus?: 'processing' | 'shipped' | 'delivered' | 'cancelled';
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
  onDownloadInvoice?: () => void;
  onShareOrder?: () => void;
  onContinueShopping?: () => void;
  onTrackOrder?: () => void;
  currency?: string;
  locale?: string;
}

/**
 * @interface IOrderConfirmationEvents
 * @description События компонента OrderConfirmation
 */
export interface IOrderConfirmationEvents {
  onDownloadInvoice?: () => void;
  onShareOrder?: () => void;
  onContinueShopping?: () => void;
  onTrackOrder?: () => void;
}