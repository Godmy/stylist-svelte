import type { NotificationCenterProps } from '$stylist/communication/interface/component/notifications/other';
import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';

export interface NotificationCenterStateProps extends NotificationCenterProps {}

export function createNotificationCenterState(props: NotificationCenterStateProps) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const unread = $derived(notifications.filter((n) => !n.read).length);

	const containerClasses = $derived(
		InteractionFeedbackStyleManager.root(
			'c-notification-center border rounded-lg p-4',
			className != null ? String(className) : ''
		)
	);

	const restProps = $derived.by(() => {
		const { class: _class, notifications: _notifications, ...rest } = props;
		return rest;
	});

	return {
		get notifications() { return notifications; },
		get unread() { return unread; },
		get containerClasses() { return containerClasses; },
		get restProps() { return restProps; }
	};
}

export default createNotificationCenterState;
