import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ToastNotificationType } from '$stylist/notification/type/struct/toast/toast-notification-type';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	type?: ToastNotificationType;
	visible?: boolean;
	duration?: number;
	title?: Snippet;
	description?: Snippet;
	class?: string;
	children?: Snippet;
	ontoastClosed?: (event: CustomEvent) => void;
}
