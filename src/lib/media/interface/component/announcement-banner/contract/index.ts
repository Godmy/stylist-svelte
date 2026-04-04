import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { Snippet } from 'svelte';

export interface AnnouncementBannerContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** Banner title */
	title?: string;
	/** Banner description */
	description?: string;
	/** Icon name */
	icon?: string;
	/** Additional CSS class */
	class?: string;
}
