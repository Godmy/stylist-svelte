import type { RecipeBillingSummary } from '$stylist/commerce/interface/recipe/billing-summary';
import type { TokenBillingItem } from '$stylist/commerce/type/alias/billing-item';
import type { TokenBillingSummary } from '$stylist/commerce/type/alias/billing-summary';

export function createBillingSummaryState(props: RecipeBillingSummary) {
	const total = $derived((props.items ?? []).reduce((sum, item) => sum + item.amount, 0));
	const invoiceId = `#INV-${Math.floor(Math.random() * 900000) + 100000}`;
	const generatedDate = new Date().toLocaleDateString();

	function formatCurrency(amount: number, curr: string) {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: curr }).format(amount);
	}

	function formatDate(date?: Date) {
		if (!date) return '';
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
	}

	function getStatusText(status?: TokenBillingSummary) {
		switch (status) {
			case 'paid':
				return 'Paid';
			case 'overdue':
				return 'Overdue';
			case 'cancelled':
				return 'Cancelled';
			default:
				return 'Pending';
		}
	}

	function getItemStatusText(status: TokenBillingItem) {
		return status.charAt(0).toUpperCase() + status.slice(1);
	}

	return {
		get total() {
			return total;
		},
		get invoiceId() {
			return invoiceId;
		},
		get generatedDate() {
			return generatedDate;
		},
		get containerClass() {
			return ['billing-summary', props.class].filter(Boolean).join(' ');
		},
		get headerClass() {
			return ['billing-summary__header', props.headerClass].filter(Boolean).join(' ');
		},
		get headerRowClass() {
			return 'billing-summary__row';
		},
		get titleRowClass() {
			return 'billing-summary__title-row';
		},
		get headerIconClass() {
			return 'billing-summary__header-icon';
		},
		get titleClass() {
			return 'billing-summary__title';
		},
		get subtitleClass() {
			return 'billing-summary__subtitle';
		},
		get amountBlockClass() {
			return 'billing-summary__amount-block';
		},
		get totalAmountClass() {
			return 'billing-summary__total-amount';
		},
		get summaryClass() {
			return ['billing-summary__summary', props.summaryClass].filter(Boolean).join(' ');
		},
		get metricGridClass() {
			return 'billing-summary__metric-grid';
		},
		get metricCardClass() {
			return 'billing-summary__metric-card';
		},
		get metricRowClass() {
			return 'billing-summary__metric-row';
		},
		get metricIconContainerClass() {
			return 'billing-summary__metric-icon-container';
		},
		get metricIconClass() {
			return 'billing-summary__metric-icon';
		},
		get metricContentClass() {
			return 'billing-summary__metric-content';
		},
		get metricLabelClass() {
			return 'billing-summary__metric-label';
		},
		get metricValueClass() {
			return 'billing-summary__metric-value';
		},
		get itemsClass() {
			return ['billing-summary__items', props.itemsClass].filter(Boolean).join(' ');
		},
		get itemsTitleClass() {
			return 'billing-summary__items-title';
		},
		get itemsListClass() {
			return 'billing-summary__items-list';
		},
		get itemClass() {
			return 'billing-summary__item';
		},
		get itemDescriptionClass() {
			return 'billing-summary__item-description';
		},
		get itemDateClass() {
			return 'billing-summary__item-date';
		},
		get itemAmountClass() {
			return 'billing-summary__item-amount';
		},
		get footerClass() {
			return ['billing-summary__footer', props.footerClass].filter(Boolean).join(' ');
		},
		get invoiceIdClass() {
			return 'billing-summary__invoice-id';
		},
		get invoiceIdValueClass() {
			return 'billing-summary__invoice-id-value';
		},
		get generatedDateClass() {
			return 'billing-summary__generated-date';
		},
		getStatusBadgeClass(status?: TokenBillingSummary) {
			return [
				'billing-summary__status-badge',
				status
					? `billing-summary__status-badge--${status}`
					: 'billing-summary__status-badge--pending'
			].join(' ');
		},
		getStatusMetricIconContainerClass(status?: TokenBillingSummary) {
			return [
				'billing-summary__metric-icon-container',
				status
					? `billing-summary__metric-icon-container--${status}`
					: 'billing-summary__metric-icon-container--pending'
			].join(' ');
		},
		getStatusMetricIconClass(status?: TokenBillingSummary) {
			return [
				'billing-summary__metric-icon',
				status ? `billing-summary__metric-icon--${status}` : 'billing-summary__metric-icon--pending'
			].join(' ');
		},
		getStatusMetricValueClass(status?: TokenBillingSummary) {
			return [
				'billing-summary__metric-value',
				status
					? `billing-summary__metric-value--${status}`
					: 'billing-summary__metric-value--pending'
			].join(' ');
		},
		getItemStatusBadgeClass(status: TokenBillingItem) {
			return [
				'billing-summary__item-status-badge',
				`billing-summary__item-status-badge--${status}`
			].join(' ');
		},
		formatCurrency,
		formatDate,
		getStatusText,
		getItemStatusText
	};
}
