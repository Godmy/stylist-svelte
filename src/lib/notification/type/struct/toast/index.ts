/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { ToastNotificationType } from './toast-notification-type';
export type { IToastStyleClasses } from './toast-style-classes';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

/**
 * Toast props — main export
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ToastNotificationType } from './toast-notification-type';

export interface IToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	type?: ToastNotificationType;
	visible?: boolean;
	duration?: number;
	title?: Snippet;
	description?: Snippet;
	class?: string;
	children?: Snippet;
	ontoastClosed?: (event: CustomEvent) => void;
}