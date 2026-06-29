import type { TokenSkeleton } from '$stylist/architecture/type/alias/skeleton';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';

export interface SlotSkeleton extends HtmlAttributesBase<HTMLDivElement> {
	variant?: TokenSkeleton;
	width?: string | number;
	height?: string | number;
}
