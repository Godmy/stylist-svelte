import type { TrackingStatusType } from '$stylist/commerce/type/struct/tracking-status-type';
import type { RecipeOrderTracking as OrderTrackingContract } from '$stylist/commerce/interface/recipe/order-tracking';
export function createOrderTrackingState(props: OrderTrackingContract) {
	const trackingInfo = $derived(props.trackingInfo);

	function getEventStatus(
		eventStatus: TrackingStatusType,
		currentStatus: TrackingStatusType
	): 'completed' | 'current' | 'upcoming' {
		const statuses: TrackingStatusType[] = [
			'pending',
			'processing',
			'shipped',
			'out-for-delivery',
			'delivered'
		];
		const eventIdx = statuses.indexOf(eventStatus);
		const currentIdx = statuses.indexOf(currentStatus);
		if (eventIdx < currentIdx) return 'completed';
		if (eventIdx === currentIdx) return 'current';
		return 'upcoming';
	}

	function formatDate(date: Date) {
		return date.toLocaleDateString([], {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	return {
		get trackingInfo() {
			return trackingInfo;
		},
		getEventStatus,
		formatDate
	};
}

export default createOrderTrackingState;
