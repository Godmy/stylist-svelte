import type { HTMLAttributes } from 'svelte/elements';

export interface SlotSecuritySettings extends HTMLAttributes<HTMLFormElement> {
	twoFactor?: boolean;
	loginAlerts?: boolean;
	class?: string;
}
