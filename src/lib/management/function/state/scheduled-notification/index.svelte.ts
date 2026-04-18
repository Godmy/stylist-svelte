import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';
import type { ScheduledNotificationStateProps } from '$stylist/management/interface/recipe/scheduled-notification';

export function createScheduledNotificationState(props: ScheduledNotificationStateProps) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		InteractionFeedbackStyleManager.root(
			'c-scheduled-notification border rounded-lg p-4',
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

export default createScheduledNotificationState;
