import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
export interface RecipePinInputDigit
	extends ComputeIntersectAll<[((HtmlAttributesBase<HTMLInputElement> & {
value?: string;
	focused?: boolean;
	invalid?: boolean;
})), { focused?: boolean; invalid?: boolean; variant?: TokenColorTone; size?: 'sm' | 'md' | 'lg' }]> {}
