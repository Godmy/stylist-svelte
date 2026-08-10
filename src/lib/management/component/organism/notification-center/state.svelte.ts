import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeNotificationCenter } from '$stylist/management/interface/recipe/notification-center';

export function createNotificationCenterState(props: RecipeNotificationCenter) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const unread = $derived(notifications.filter((n: { read?: boolean }) => !n.read).length);

	const containerClasses = $derived(
		mergeClassNames('c-notification-center border rounded-lg p-4', className)
	);

	const restProps = $derived.by(() => {
		const { class: _class, notifications: _notifications, ...rest } = props;
		return rest;
	});

	return {
		get notifications() {
			return notifications;
		},
		get unread() {
			return unread;
		},
		get containerClasses() {
			return containerClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
