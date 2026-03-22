import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { TokenBillingItem } from '$stylist/design-system/tokens/commerce/billing-item';
import type { TokenBillingSummary } from '$stylist/design-system/tokens/commerce/billing-summary';

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

