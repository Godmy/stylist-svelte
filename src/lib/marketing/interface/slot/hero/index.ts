import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { TokenBackground } from '$stylist/layout/type/alias/background';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { SlotHeroCta } from '$stylist/marketing/interface/slot/hero-cta';
export interface SlotHero extends LayoutHTMLAttributes<HTMLDivElement>, SlotChildren {
	title: string;
	subtitle?: string;
	stats?: {
	label: string;
	value: string | number;
}[];
	primaryCTA?: SlotHeroCta;
	secondaryCTA?: SlotHeroCta;
	backgroundVariant?: TokenBackground;
	backgroundImage?: string;
	height?: TokenSize;
}
