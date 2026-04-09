import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface PlaygroundAiChatContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Additional CSS class */
	class?: string;
}
