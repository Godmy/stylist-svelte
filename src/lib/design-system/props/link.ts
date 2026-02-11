import type { CompactSize } from '../tokens/sizes';
import type { DefaultVariants } from '../tokens/variants';
import type { HtmlAttributesWithChildren } from './common';

export interface TextProps extends HtmlAttributesWithChildren<HTMLElement> {
	variant?: DefaultVariants;
	size?: CompactSize;
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
	variant?: DefaultVariants;
}

export interface LinkProps extends InlineBaseProps<HTMLAnchorElement> {
	variant?: DefaultVariants;
	size?: CompactSize;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	target?: string;
	text?: string;
}
