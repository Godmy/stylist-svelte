import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeScheduledNotification } from '$stylist/management/interface/recipe/scheduled-notification';

export function createScheduledNotificationState(props: RecipeScheduledNotification) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		mergeClassNames('c-scheduled-notification border rounded-lg p-4', className)
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
