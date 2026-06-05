import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { Snippet } from 'svelte';

export interface ContractAnnouncementBanner
	extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Banner title */
	title?: string;
	/** Banner description */
	description?: string;
	/** Icon name */
	icon?: string;
	/** Slot content */
	children?: Snippet;
	/** Additional CSS class */
	class?: string;
}
