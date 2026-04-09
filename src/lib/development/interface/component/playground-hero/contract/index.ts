import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { Snippet } from 'svelte';

export interface AIModelContract {
	name: string;
	url: string;
	logo: string;
	bgColor: string;
	description: string;
}

export interface PlaygroundHeroContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Title */
	title?: string;
	/** Subtitle */
	subtitle?: string;
	/** Description */
	description?: string;
	/** Badge label */
	badgeLabel?: string;
	/** Badge href */
	badgeHref?: string;
	/** Powered by label */
	poweredByLabel?: string;
	/** AI models */
	aiModels?: AIModelContract[];
	/** Additional CSS class */
	class?: string;
}
