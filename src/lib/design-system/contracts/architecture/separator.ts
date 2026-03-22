import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenCodeView } from '$stylist/design-system/tokens/information/code-view';
import type { TokenOrientation } from '$stylist/design-system/tokens/architecture/ownership/orientation';

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







