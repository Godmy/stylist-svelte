import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { ChildrenHtmlAttributes } from '$stylist/layout/type/struct/children';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { IHeroStat } from '$stylist/marketing/type/struct/hero';
import type { IHeroCTA } from '$stylist/marketing/type/hero-cta';

export interface SlotHero
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	title: string;
	subtitle?: string;
	stats?: IHeroStat[];
	primaryCTA?: IHeroCTA;
	secondaryCTA?: IHeroCTA;
	backgroundVariant?: TokenBackground;
	backgroundImage?: string;
	height?: TokenSize;
}
