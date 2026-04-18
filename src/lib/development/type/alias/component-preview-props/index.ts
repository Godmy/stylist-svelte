import type { Snippet } from 'svelte';

export type ComponentPreviewProps = {
	title: string;
	description?: string;
	code: string;
	language?: string;
	componentDemo: Snippet;
	showCode?: boolean;
	class?: string;
};
