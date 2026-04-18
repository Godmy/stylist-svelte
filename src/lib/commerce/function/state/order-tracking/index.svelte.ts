import type { TrackingStatusType } from '$stylist/commerce/type/struct/tracking-status-type';
import type { RecipeOrderTracking as OrderTrackingContract } from '$stylist/commerce/interface/recipe/order-tracking';
import { OrderTrackingStyleManager } from '$stylist/commerce/class/style-manager/order-tracking';

export function createOrderTrackingState(props: OrderTrackingContract) {
	const trackingInfo = $derived(props.trackingInfo);

	const containerClasses = $derived(OrderTrackingStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(OrderTrackingStyleManager.getHeaderClasses());
	const titleClasses = $derived(OrderTrackingStyleManager.getTitleClasses());
	const progressContainerClasses = $derived(OrderTrackingStyleManager.getProgressContainerClasses());
	const progressBarClasses = $derived(OrderTrackingStyleManager.getProgressBarClasses());
	const progressFillClasses = $derived(OrderTrackingStyleManager.getProgressFillClasses());
	const timelineContainerClasses = $derived(OrderTrackingStyleManager.getTimelineContainerClasses());
	const timelineItemClasses = $derived(OrderTrackingStyleManager.getTimelineItemClasses());
	const timelineContentClasses = $derived(OrderTrackingStyleManager.getTimelineContentClasses());
	const eventTitleClasses = $derived(OrderTrackingStyleManager.getEventTitleClasses());
	const eventDescriptionClasses = $derived(OrderTrackingStyleManager.getEventDescriptionClasses());
	const eventDateClasses = $derived(OrderTrackingStyleManager.getEventDateClasses());
	const shippingInfoClasses = $derived(OrderTrackingStyleManager.getShippingInfoClasses());
	const addressClasses = $derived(OrderTrackingStyleManager.getAddressClasses());
	const actionsContainerClasses = $derived(OrderTrackingStyleManager.getActionsContainerClasses());

	function getTimelineIndicatorClasses(status: 'completed' | 'current' | 'upcoming') {
		return OrderTrackingStyleManager.getTimelineIndicatorClasses(status);
	}

	function getActionButtonClasses(variant: 'primary' | 'secondary') {
		return OrderTrackingStyleManager.getActionButtonClasses(variant);
	}

	function getStatusBadgeClasses(status: string) {
		return OrderTrackingStyleManager.getStatusBadgeClasses(status);
	}

	function getEventStatus(eventStatus: TrackingStatusType, currentStatus: TrackingStatusType): 'completed' | 'current' | 'upcoming' {
		const statuses: TrackingStatusType[] = ['pending', 'processing', 'shipped', 'out-for-delivery', 'delivered'];
		const eventIdx = statuses.indexOf(eventStatus);
		const currentIdx = statuses.indexOf(currentStatus);
		if (eventIdx < currentIdx) return 'completed';
		if (eventIdx === currentIdx) return 'current';
		return 'upcoming';
	}

	function formatDate(date: Date) {
		return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
	}

	return {
		get trackingInfo() { return trackingInfo; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get progressContainerClasses() { return progressContainerClasses; },
		get progressBarClasses() { return progressBarClasses; },
		get progressFillClasses() { return progressFillClasses; },
		get timelineContainerClasses() { return timelineContainerClasses; },
		get timelineItemClasses() { return timelineItemClasses; },
		get timelineContentClasses() { return timelineContentClasses; },
		get eventTitleClasses() { return eventTitleClasses; },
		get eventDescriptionClasses() { return eventDescriptionClasses; },
		get eventDateClasses() { return eventDateClasses; },
		get shippingInfoClasses() { return shippingInfoClasses; },
		get addressClasses() { return addressClasses; },
		get actionsContainerClasses() { return actionsContainerClasses; },
		getTimelineIndicatorClasses,
		getActionButtonClasses,
		getStatusBadgeClasses,
		getEventStatus,
		formatDate
	};
}

export default createOrderTrackingState;
