
import type { TOKEN_COLOR_TONE } from '$stylist/color/const/array/tone';
export type AlertProps = {
	variant?: (typeof TOKEN_COLOR_TONE)[number];
	title?: string;
	closable?: boolean;
	icon?: boolean;
	content?: import('svelte').Snippet;
	children?: import('svelte').Snippet;
	class?: string;
	[propName: string]: unknown;
};
