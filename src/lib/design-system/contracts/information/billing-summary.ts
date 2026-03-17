import type { BillingItemStatus, BillingSummaryStatus } from '$stylist/design-system/tokens/interaction/statuses';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';

export interface IBillingItem {
  id: string;
  description: string;
  amount: number;
  currency: string;
  date: Date;
  status: BillingItemStatus;
}

export interface IBillingSummaryProps extends HtmlAttributesBase<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  totalAmount?: number;
  currency?: string;
  dueDate?: Date;
  status?: BillingSummaryStatus;
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

