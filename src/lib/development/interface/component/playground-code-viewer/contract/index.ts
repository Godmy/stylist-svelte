import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface PlaygroundCodeViewerContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Code content */
	code?: string;
	/** Programming language */
	language?: string;
	/** Read-only mode */
	readonly?: boolean;
	/** Additional CSS class */
	class?: string;
}
