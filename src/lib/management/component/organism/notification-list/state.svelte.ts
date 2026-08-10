import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeNotificationList } from '$stylist/management/interface/recipe/notification-list';

export function createNotificationListState(props: RecipeNotificationList) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const containerClasses = $derived(
		mergeClassNames('c-notification-list border rounded-lg p-4 space-y-2', className)
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
