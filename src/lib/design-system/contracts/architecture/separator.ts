import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Code } from '$stylist/design-system/tokens/interaction/variants';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';

export interface SeparatorProps extends ArchitectureHTMLAttributes<HTMLHRElement> {
	orientation?: Orientation;
	decorative?: boolean;
}

export interface SyntaxHighlightedCodeProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	language?: string;
	code?: string;
	variant?: Code;
	size?: ComponentSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}






