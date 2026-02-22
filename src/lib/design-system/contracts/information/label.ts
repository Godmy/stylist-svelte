import type { LabelSize } from '../../tokens';
import type { HtmlAttributesWithChildren } from './common';

export interface LabelProps extends HtmlAttributesWithChildren<HTMLLabelElement> {
	size?: LabelSize;
	required?: boolean;
	disabled?: boolean;
	htmlFor?: string;
	text?: string;
}
