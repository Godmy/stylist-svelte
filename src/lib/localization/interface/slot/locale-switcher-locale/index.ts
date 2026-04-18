import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotLocaleSwitcherLocale {
	code: string;
	name: string;
	region?: string;
	flag?: string;
}
