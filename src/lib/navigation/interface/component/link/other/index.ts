import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesWithChildren } from '$stylist/information/type/struct/common';

export interface InlineTextProps extends HtmlAttributesWithChildren<HTMLElement> {
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









