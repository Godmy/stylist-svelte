import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Code as CodeToken } from '$stylist/design-system/tokens/architecture/code';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';

export type Code = CodeToken;

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




