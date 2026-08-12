import type { HTMLAttributes } from 'svelte/elements';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
export interface RecipePromoBanner extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	title?: string;
	description?: string;
	cta?: string;
	image?: string;
	variant?: TokenColorTone;
	onCtaClick?: () => void;
	class?: string;
}
