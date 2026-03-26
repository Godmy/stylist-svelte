import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/information/type/attribute/common';

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










