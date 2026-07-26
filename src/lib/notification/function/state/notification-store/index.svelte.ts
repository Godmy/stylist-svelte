import type { RecipeNotificationOptions } from '$stylist/notification/interface/recipe/notification-options';
import type { RecipeToast } from '$stylist/notification/interface/recipe/toast';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export function createNotificationStore() {
	let notifications = $state<RecipeToast[]>([]);
	let idCounter = 0;

	function dismiss(id: string): void {
		const index = notifications.findIndex((notification) => notification.id === id);
		if (index > -1) {
			notifications.splice(index, 1);
		}
	}

	function add(
		type: TokenColorTone,
		message: string,
		options: RecipeNotificationOptions = {}
	): string {
		const id = `notification-${++idCounter}`;
		const notification: RecipeToast = {
			id,
			type,
			message,
			title: options.title,
			duration: options.duration ?? 5000,
			dismissible: options.dismissible ?? true,
			actions: options.actions,
			onDismiss: options.dismissible === false ? undefined : () => dismiss(id)
		};

		notifications.push(notification);

		if (notification.duration && notification.duration > 0) {
			setTimeout(() => dismiss(id), notification.duration);
		}

		return id;
	}

	function success(message: string, options?: RecipeNotificationOptions): string {
		return add('success', message, options);
	}

	function error(message: string, options?: RecipeNotificationOptions): string {
		return add('error', message, {
			duration: 7000,
			...options
		});
	}

	function warning(message: string, options?: RecipeNotificationOptions): string {
		return add('warning', message, options);
	}

	function info(message: string, options?: RecipeNotificationOptions): string {
		return add('info', message, options);
	}

	function dismissAll(): void {
		notifications = [];
	}

	function clearType(type: TokenColorTone): void {
		notifications = notifications.filter((notification) => notification.type !== type);
	}

	return {
		get items() {
			return notifications;
		},
		add,
		success,
		error,
		warning,
		info,
		dismiss,
		dismissAll,
		clearType
	};
}
