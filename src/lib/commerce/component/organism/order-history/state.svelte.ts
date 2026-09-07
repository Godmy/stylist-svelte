import type { RecipeOrderHistory as OrderHistoryContract } from '$stylist/commerce/interface/recipe/order-history';
export function createOrderHistoryState(props: OrderHistoryContract) {
	let searchQuery = $state('');

	const orders = $derived(props.orders ?? []);

	const filteredOrders = $derived(
		searchQuery
			? orders.filter(
					(o) =>
						o.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
						o.status.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: orders
	);

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
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(v: string) {
			searchQuery = v;
		},
		get orders() {
			return orders;
		},
		get filteredOrders() {
			return filteredOrders;
		},
		formatDate,
		formatPrice
	};
}

export default createOrderHistoryState;
