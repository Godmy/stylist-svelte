import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenOrientation } from '$stylist/architecture/type/token/orientation';
import type { TokenCodeView } from '$stylist/information/type/token/code-view';
import type { TokenSize } from '$stylist/architecture/type/token/size';

export interface SeparatorProps extends ArchitectureHTMLAttributes<HTMLHRElement> {
	orientation?: TokenOrientation;
	decorative?: boolean;
}

export interface SyntaxHighlightedCodeProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	language?: string;
	code?: string;
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}
