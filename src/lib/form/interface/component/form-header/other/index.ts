import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface FormHeaderProps extends InteractionHTMLAttributes<HTMLDivElement> {
	title: string;
	subtitle?: string;
	description?: string;
	actions?: Snippet;
	backAction?: () => void;
	backButtonLabel?: string;
	class?: string;
	titleClass?: string;
	subtitleClass?: string;
	descriptionClass?: string;
	actionsClass?: string;
	backButtonClass?: string;
}
