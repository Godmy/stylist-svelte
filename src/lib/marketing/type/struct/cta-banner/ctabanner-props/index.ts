import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenBackground } from '$stylist/layout/type/alias/background';

export type CtaBannerProps = {
	title: string;
	description?: string;
	buttons: {
	label: string;
	variant: 'primary' | 'secondary' | 'outline';
	onClick: () => void;
}[];
	backgroundVariant?: TokenBackground;
	backgroundImage?: string;
	class?: string;
} & HTMLAttributes<HTMLElement> & SlotThemeBorder & SlotTypography;
