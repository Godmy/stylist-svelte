import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';

export interface DividerProps extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	orientation?: TokenOrientation;
	align?: string;
	dashed?: boolean;
	label?: string;
}
