import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';
import type { NotificationListStateProps } from '$stylist/management/interface/recipe/notification-list';

export function createNotificationListState(props: NotificationListStateProps) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		InteractionFeedbackStyleManager.root(
			'c-notification-list border rounded-lg p-4 space-y-2',
			className != null ? String(className) : ''
		)
	);

	const restProps = $derived.by(() => {
		const { class: _class, notifications: _notifications, ...rest } = props;
		return rest;
	});

	return {
		get notifications() { return notifications; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; }
	};
}

export default createNotificationListState;
