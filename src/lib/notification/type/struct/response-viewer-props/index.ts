import type { HTMLAttributes } from 'svelte/elements';

export type ResponseViewerProps = HTMLAttributes<HTMLDivElement> & {
	title?: string;
	response?: string;
	status?: string;
	class?: string;
};
