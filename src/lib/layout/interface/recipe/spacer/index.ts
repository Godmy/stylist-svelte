import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
import type { TokenSizeRem } from '$stylist/theme/type/alias/size-rem';
export interface RecipeSpacer extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	size?: TokenSizeRem;
	axis?: TokenOrientation | 'both';
	inline?: boolean;
}
