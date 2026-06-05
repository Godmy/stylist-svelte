import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';

export interface SlotSecuritySettings extends InteractionHTMLAttributes<HTMLFormElement> {
	twoFactor?: boolean;
	loginAlerts?: boolean;
	class?: string;
}
