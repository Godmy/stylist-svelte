import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface ContractAudioVisualizer
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Audio source */
	src?: string;
	/** Visualizer type */
	type?: 'bars' | 'wave' | 'circular';
	/** Additional CSS class */
	class?: string;
}
