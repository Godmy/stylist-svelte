import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { ChildrenHtmlAttributes } from '$stylist/layout/type/struct/children';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { RecordMarketingMerge } from '$stylist/marketing/type/record';
import type { IHeroCTA, IHeroStat } from '$stylist/marketing/type/struct/hero';

export type HeroContract = RecordArchitectureMerge<
	[
		{
			title: string;
			subtitle?: string;
			stats?: IHeroStat[];
			primaryCTA?: IHeroCTA;
			secondaryCTA?: IHeroCTA;
			backgroundVariant?: TokenBackground;
			backgroundImage?: string;
			height?: TokenSize;
		},
		ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

export type { IHeroCTA, IHeroStat };
