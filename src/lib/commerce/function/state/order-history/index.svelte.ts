import type { OrderHistoryContract, OrderContract } from '$stylist/commerce/interface/component/order-history';
import { OrderHistoryStyleManager } from '$stylist/commerce/class/style-manager/order-history';

export function createOrderHistoryState(props: OrderHistoryContract) {
	let searchQuery = $state('');

	const orders = $derived(props.orders ?? []);

	const filteredOrders = $derived(
		searchQuery
			? orders.filter(o =>
				o.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
				o.status.toLowerCase().includes(searchQuery.toLowerCase())
			)
			: orders
	);

	const containerClasses = $derived(OrderHistoryStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(OrderHistoryStyleManager.getHeaderClasses());
	const titleClasses = $derived(OrderHistoryStyleManager.getTitleClasses());
	const filtersContainerClasses = $derived(OrderHistoryStyleManager.getFiltersContainerClasses());
	const searchInputClasses = $derived(OrderHistoryStyleManager.getSearchInputClasses());
	const ordersContainerClasses = $derived(OrderHistoryStyleManager.getOrdersContainerClasses());
	const orderItemClasses = $derived(OrderHistoryStyleManager.getOrderItemClasses());
	const orderNumberClasses = $derived(OrderHistoryStyleManager.getOrderNumberClasses());
	const orderDateClasses = $derived(OrderHistoryStyleManager.getOrderDateClasses());
	const orderTotalClasses = $derived(OrderHistoryStyleManager.getOrderTotalClasses());
	const actionsContainerClasses = $derived(OrderHistoryStyleManager.getActionsContainerClasses());
	const actionButtonClasses = $derived(OrderHistoryStyleManager.getActionButtonClasses());
	const itemThumbnailClasses = $derived(OrderHistoryStyleManager.getItemThumbnailClasses());

	function getStatusBadgeClasses(status: string) {
		return OrderHistoryStyleManager.getStatusBadgeClasses(status);
	}

	function formatDate(date: Date) {
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
	}

	function formatPrice(amount: number, currency?: string) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currency ?? 'USD'
		}).format(amount);
	}

	return {
		get searchQuery() { return searchQuery; },
		set searchQuery(v: string) { searchQuery = v; },
		get orders() { return orders; },
		get filteredOrders() { return filteredOrders; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get filtersContainerClasses() { return filtersContainerClasses; },
		get searchInputClasses() { return searchInputClasses; },
		get ordersContainerClasses() { return ordersContainerClasses; },
		get orderItemClasses() { return orderItemClasses; },
		get orderNumberClasses() { return orderNumberClasses; },
		get orderDateClasses() { return orderDateClasses; },
		get orderTotalClasses() { return orderTotalClasses; },
		get actionsContainerClasses() { return actionsContainerClasses; },
		get actionButtonClasses() { return actionButtonClasses; },
		get itemThumbnailClasses() { return itemThumbnailClasses; },
		getStatusBadgeClasses,
		formatDate,
		formatPrice
	};
}

export default createOrderHistoryState;
