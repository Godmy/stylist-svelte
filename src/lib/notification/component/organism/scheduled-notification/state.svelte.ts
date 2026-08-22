import { ClassNamesManager } from '$stylist/layout/class/manager/class-names';
import type { RecipeScheduledNotification } from '$stylist/notification/interface/recipe/scheduled-notification';

export function createScheduledNotificationState(props: RecipeScheduledNotification) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		ClassNamesManager.merge('c-scheduled-notification border rounded-lg p-4', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, notifications: _notifications, ...rest } = props;
		return rest;
	});

	return {
		get notifications() {
			return notifications;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
