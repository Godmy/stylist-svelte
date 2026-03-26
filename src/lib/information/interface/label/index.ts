import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { HtmlAttributesWithChildren } from '$stylist/information/type/attribute/common';

export interface LabelProps extends HtmlAttributesWithChildren<HTMLLabelElement> {
	size?: TokenSize;
	required?: boolean;
	disabled?: boolean;
	htmlFor?: string;
	text?: string;
}




