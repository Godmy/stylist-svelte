import type { HtmlAttributesBase } from '$stylist/information/type/struct';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { TokenBillingSummary } from '$stylist/commerce/type/enum/billing-summary';

export interface IBillingItem {
  id: string;
  description: string;
  amount: number;
  currency: string;
  date: Date;
  status: TokenBillingItem;
}

export interface IBillingSummaryProps extends HtmlAttributesBase<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  totalAmount?: number;
  currency?: string;
  dueDate?: Date;
  status?: TokenBillingSummary;
  items: IBillingItem[];
  showDetails?: boolean;
  showDueDate?: boolean;
  showStatus?: boolean;
  class?: string;
  headerClass?: string;
  summaryClass?: string;
  itemsClass?: string;
  footerClass?: string;
}

