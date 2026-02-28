import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { InlineCodeVariant } from '$stylist/design-system/tokens/information/inline-code-variants';
import type { LinkVariant } from '$stylist/design-system/tokens/interaction/link-variants';
import type { DefaultVariants } from '$stylist/design-system/tokens/information/default-variants';
import type { HtmlAttributesWithChildren } from '../information/common';

export interface TextProps extends HtmlAttributesWithChildren<HTMLElement> {
	variant?: DefaultVariants;
	size?: ComponentSize;
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
	variant?: InlineCodeVariant;
}

export interface LinkProps extends InlineBaseProps<HTMLAnchorElement> {
	variant?: LinkVariant;
	size?: ComponentSize;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	target?: string;
	text?: string;
}




