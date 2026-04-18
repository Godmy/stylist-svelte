import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { TokenBillingSummary } from '$stylist/commerce/type/enum/billing-summary';
import type { SlotBillingItem } from '$stylist/commerce/interface/slot/billing-item';

export interface SlotBillingSummary extends HtmlAttributesBase<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  totalAmount?: number;
  currency?: string;
  dueDate?: Date;
  status?: TokenBillingSummary;
  items: SlotBillingItem[];
  showDetails?: boolean;
  showDueDate?: boolean;
  showStatus?: boolean;
  class?: string;
  headerClass?: string;
  summaryClass?: string;
  itemsClass?: string;
  footerClass?: string;
}
