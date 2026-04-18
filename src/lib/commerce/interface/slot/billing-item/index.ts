import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { TokenBillingSummary } from '$stylist/commerce/type/enum/billing-summary';

export interface SlotBillingItem {
  id: string;
  description: string;
  amount: number;
  currency: string;
  date: Date;
  status: TokenBillingItem;
}
