import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { TokenBackground } from '$stylist/layout/type/alias/background';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { IHeroCTA } from '$stylist/marketing/type/hero-cta';
export interface SlotHero extends LayoutHTMLAttributes<HTMLDivElement>, SlotChildren {
	title: string;
	subtitle?: string;
	stats?: {
	label: string;
	value: string | number;
}[];
	primaryCTA?: IHeroCTA;
	secondaryCTA?: IHeroCTA;
	backgroundVariant?: TokenBackground;
	backgroundImage?: string;
	height?: TokenSize;
}
