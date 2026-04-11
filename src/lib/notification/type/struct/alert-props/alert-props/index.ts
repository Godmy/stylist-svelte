export type AlertProps = {
	variant?: AlertVariant;
	title?: string;
	closable?: boolean;
	icon?: boolean;
	content?: import('svelte').Snippet;
	children?: import('svelte').Snippet;
	class?: string;
	[propName: string]: unknown;
}
