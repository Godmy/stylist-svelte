import type { ComponentSize } from '../../tokens';
import type { HtmlAttributesWithChildren } from './common';

export interface LabelProps extends HtmlAttributesWithChildren<HTMLLabelElement> {
	size?: ComponentSize;
	required?: boolean;
	disabled?: boolean;
	htmlFor?: string;
	text?: string;
}

