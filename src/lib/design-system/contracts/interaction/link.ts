import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/design-system/contracts/information/common';

export interface TextProps extends HtmlAttributesWithChildren<HTMLElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}

export interface InlineBaseProps<T extends HTMLElement = HTMLElement>
	extends HtmlAttributesWithChildren<T> {}

export interface AbbrProps extends InlineBaseProps {
	title?: string;
}

export interface InlineCodeProps extends InlineBaseProps {
}

export interface LinkProps extends InlineBaseProps<HTMLAnchorElement> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	target?: string;
	text?: string;
}










