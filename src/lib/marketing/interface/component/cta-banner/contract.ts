import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { RecordMarketingMerge } from '$stylist/marketing/type/record';

export interface CtaBannerButton {
	label: string;
	variant: 'primary' | 'secondary' | 'outline';
	onClick: () => void;
}

export type CtaBannerContract = RecordArchitectureMerge<
	[
		{
			title: string;
			description?: string;
			buttons: CtaBannerButton[];
			backgroundVariant?: TokenBackground;
			backgroundImage?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
