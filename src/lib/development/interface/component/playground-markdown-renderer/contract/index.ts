import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

export interface PlaygroundMarkdownRendererContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Markdown content */
	markdown?: string;
	/** Additional CSS class */
	class?: string;
}
