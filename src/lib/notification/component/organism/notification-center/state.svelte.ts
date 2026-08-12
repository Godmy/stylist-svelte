import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
﻿import type { RecipeNotificationCenter } from '$stylist/notification/interface/recipe/notification-center';

export function createNotificationCenterState(props: RecipeNotificationCenter) {
	const notifications = $derived(props.notifications ?? []);
	const className = $derived(props.class ?? '');

	const unread = $derived(notifications.filter((n: { read?: boolean }) => !n.read).length);

	const containerClasses = $derived(
		ClassNamesManager.merge('c-notification-center border rounded-lg p-4', className)
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
