import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { CtaBannerButton } from '$stylist/marketing/type/struct/cta-banner/ctabannerbutton';

export type CtaBannerProps = {
	title: string;
	description?: string;
	buttons: CtaBannerButton[];
	backgroundVariant?: TokenBackground;
	backgroundImage?: string;
	class?: string;
} & HTMLAttributes<HTMLElement> & BehaviorBorderToken & BehaviorTypography;
