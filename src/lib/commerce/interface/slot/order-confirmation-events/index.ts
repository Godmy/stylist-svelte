import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { TokenOrderStatus } from '$stylist/commerce/type/enum/order-status';

export interface SlotOrderConfirmationEvents {
  onDownloadInvoice?: () => void;
  onShareOrder?: () => void;
  onContinueShopping?: () => void;
  onTrackOrder?: () => void;
}
