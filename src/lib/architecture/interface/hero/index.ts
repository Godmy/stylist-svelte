import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { ChildrenHtmlAttributes } from '$stylist/architecture/type/attribute/children';
import type { TokenBackground } from '$stylist/information/type/token/background';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { IHeroCTA, IHeroStat } from '$stylist/architecture/type/attribute/hero';

export interface IHeroProps
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

export type { IHeroCTA, IHeroStat };
