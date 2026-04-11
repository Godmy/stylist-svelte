import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ToastNotificationType } from '$stylist/notification/type/struct/toast/toast-notification-type';

export type ToastProps = Omit<HTMLAttributes<HTMLDivElement> & 'title'> & {
	type?: ToastNotificationType;
	visible?: boolean;
	duration?: number;
	title?: Snippet;
	description?: Snippet;
	class?: string;
	children?: Snippet;
	ontoastClosed?: (event: CustomEvent) => void;
}
