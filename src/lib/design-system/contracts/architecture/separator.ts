import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Code } from '$stylist/design-system/tokens/interaction/variants';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';

export interface SeparatorProps {
	orientation?: Orientation;
	decorative?: boolean;
	class?: string;
}

export interface SyntaxHighlightedCodeProps {
	language?: string;
	code?: string;
	variant?: Code;
	size?: ComponentSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	class?: string;
}




