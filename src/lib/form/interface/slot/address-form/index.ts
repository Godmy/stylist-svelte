import type { HTMLAttributes } from 'svelte/elements';

export interface SlotAddressForm extends HTMLAttributes<HTMLFormElement> {
	street?: string;
	city?: string;
	region?: string;
	postalCode?: string;
	country?: string;
	class?: string;
}
