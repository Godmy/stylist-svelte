import type { Snippet } from 'svelte';

export type LiveCodeSectionProps = {
	badgeText?: string;
	title?: string;
	description?: string;
	code?: string;
	ctaText?: string;
	ctaHref?: string;
	class?: string;
	children?: Snippet;
};
