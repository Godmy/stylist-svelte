import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { ChildrenHtmlAttributes } from '$stylist/architecture/type/attribute/children';
import type { TokenGradient } from '$stylist/information/type/token/gradient';

export interface IGradientBackgroundProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	variant?: TokenGradient;
	colors?: string[];
	speed?: number;
	intensity?: number;
	direction?: string;
}
