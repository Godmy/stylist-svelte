
import type { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';
export type PromoBannerProps = {
	title?: string;
	description?: string;
	cta?: string;
	link?: string;
	image?: string;
	variant?: (typeof TOKEN_COLOR_TONE)[number];
	onCtaClick?: () => void;
	class?: string;
};
