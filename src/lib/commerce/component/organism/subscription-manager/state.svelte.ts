import type { RecipeSubscriptionManager as SubscriptionManagerContract } from '$stylist/commerce/interface/recipe/subscription-manager';
export function createSubscriptionManagerState(props: SubscriptionManagerContract) {
	const subscription = $derived(props.subscription);

	function formatDate(date?: Date) {
		if (!date) return '';
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
	}

	function formatPrice(amount: number, currency: string) {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
	}

	return {
		get subscription() {
			return subscription;
		},
		formatDate,
		formatPrice
	};
}

export default createSubscriptionManagerState;
