import type { SlotBillingSummary as IBillingSummaryProps } from '$stylist/commerce/interface/slot/billing-summary';
import { BillingSummaryStyleManager } from '$stylist/commerce/class/style-manager/billing-summary';

export function createBillingSummaryState(props: IBillingSummaryProps) {
	const total = $derived((props.items ?? []).reduce((sum, item) => sum + item.amount, 0));

	const containerClasses = $derived(
		`c-billing-summary ${BillingSummaryStyleManager.getContainerClasses(props.class ?? '')}`
	);
	const headerClasses = $derived(BillingSummaryStyleManager.getHeaderClasses(props.headerClass ?? ''));
	const titleClasses = $derived(BillingSummaryStyleManager.getTitleClasses());
	const subtitleClasses = $derived(BillingSummaryStyleManager.getSubtitleClasses());
	const totalAmountClasses = $derived(BillingSummaryStyleManager.getTotalAmountClasses());
	const summaryClasses = $derived(BillingSummaryStyleManager.getSummaryClasses(props.summaryClass ?? ''));
	const metricCardClasses = $derived(BillingSummaryStyleManager.getMetricCardClasses());
	const metricIconContainerClasses = $derived(BillingSummaryStyleManager.getMetricIconContainerClasses());
	const footerClasses = $derived(BillingSummaryStyleManager.getFooterClasses(props.footerClass ?? ''));
	const invoiceIdClasses = $derived(BillingSummaryStyleManager.getInvoiceIdClasses());
	const invoiceIdFontClass = $derived(BillingSummaryStyleManager.getInvoiceIdFontClass());
	const generatedDateClasses = $derived(BillingSummaryStyleManager.getGeneratedDateClasses());
	const itemsListContainerClasses = $derived(
		BillingSummaryStyleManager.getItemsListContainerClasses(props.itemsClass ?? '')
	);
	const itemsListItemClasses = $derived(BillingSummaryStyleManager.getItemsListItemClasses());
	const itemDescriptionClasses = $derived(BillingSummaryStyleManager.getItemDescriptionClasses());
	const itemDateClasses = $derived(BillingSummaryStyleManager.getItemDateClasses());
	const itemAmountClasses = $derived(BillingSummaryStyleManager.getItemAmountClasses());

	function formatCurrency(amount: number, curr: string) {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: curr }).format(amount);
	}

	function formatDate(date?: Date) {
		if (!date) return '';
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
	}

	function getStatusText(status?: string) {
		switch (status) {
			case 'paid': return 'Paid';
			case 'overdue': return 'Overdue';
			case 'cancelled': return 'Cancelled';
			default: return 'Pending';
		}
	}

	function getStatusBadgeClasses(status?: string) {
		return BillingSummaryStyleManager.getStatusBadgeClasses(status as any);
	}

	function getMetricIconContainerClassesWithStatus(status?: string) {
		return BillingSummaryStyleManager.getMetricIconContainerClasses(status as any);
	}

	function getCalendarIconClasses(status?: string) {
		return BillingSummaryStyleManager.getCalendarIconClasses(status as any);
	}

	function getDueDateTextClasses(status?: string) {
		return BillingSummaryStyleManager.getDueDateTextClasses(status as any);
	}

	function getMetricTextClasses(status?: string) {
		return BillingSummaryStyleManager.getMetricTextClasses(status as any);
	}

	function getItemStatusBadgeClasses(status: string) {
		return BillingSummaryStyleManager.getItemStatusBadgeClasses(status as any);
	}

	return {
		get total() { return total; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get subtitleClasses() { return subtitleClasses; },
		get totalAmountClasses() { return totalAmountClasses; },
		get summaryClasses() { return summaryClasses; },
		get metricCardClasses() { return metricCardClasses; },
		get metricIconContainerClasses() { return metricIconContainerClasses; },
		get footerClasses() { return footerClasses; },
		get invoiceIdClasses() { return invoiceIdClasses; },
		get invoiceIdFontClass() { return invoiceIdFontClass; },
		get generatedDateClasses() { return generatedDateClasses; },
		get itemsListContainerClasses() { return itemsListContainerClasses; },
		get itemsListItemClasses() { return itemsListItemClasses; },
		get itemDescriptionClasses() { return itemDescriptionClasses; },
		get itemDateClasses() { return itemDateClasses; },
		get itemAmountClasses() { return itemAmountClasses; },
		formatCurrency,
		formatDate,
		getStatusText,
		getStatusBadgeClasses,
		getMetricIconContainerClassesWithStatus,
		getCalendarIconClasses,
		getDueDateTextClasses,
		getMetricTextClasses,
		getItemStatusBadgeClasses
	};
}

export default createBillingSummaryState;
