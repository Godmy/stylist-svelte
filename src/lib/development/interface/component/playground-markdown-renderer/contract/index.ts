import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface PlaygroundMarkdownRendererContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Markdown content */
	markdown?: string;
	/** Additional CSS class */
	class?: string;
}
