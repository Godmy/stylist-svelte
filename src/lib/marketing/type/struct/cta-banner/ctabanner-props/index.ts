import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenBackground } from '$stylist/layout/type/alias/background';
import type { CtaBannerButton } from '$stylist/marketing/type/struct/cta-banner/ctabannerbutton';

export type CtaBannerProps = {
	title: string;
	description?: string;
	buttons: CtaBannerButton[];
	backgroundVariant?: TokenBackground;
	backgroundImage?: string;
	class?: string;
} & HTMLAttributes<HTMLElement> & SlotThemeBorder & SlotTypography;
