import type { ComponentSize } from '$stylist/design-system/tokens';
import type { HtmlAttributesWithChildren } from '$stylist/design-system/contracts/information/common';

export interface LabelProps extends HtmlAttributesWithChildren<HTMLLabelElement> {
	size?: ComponentSize;
	required?: boolean;
	disabled?: boolean;
	htmlFor?: string;
	text?: string;
}




