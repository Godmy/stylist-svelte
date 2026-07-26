
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
export type PromoBannerProps = {
	title?: string;
	description?: string;
	cta?: string;
	link?: string;
	image?: string;
	variant?: TokenColorTone;
	onCtaClick?: () => void;
	class?: string;
};
