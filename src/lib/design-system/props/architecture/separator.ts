import type { CompactSize } from '../../tokens/architecture/sizes';
import type { CodeBlockVariant } from '../../tokens';
import type { Orientation } from '../../tokens/architecture/layout';

export interface SeparatorProps {
	orientation?: Orientation;
	decorative?: boolean;
	class?: string;
}

export interface SyntaxHighlightedCodeProps {
	language?: string;
	code?: string;
	variant?: CodeBlockVariant;
	size?: CompactSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	class?: string;
}
