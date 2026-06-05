import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';
import type { TypographyTextProps } from '$stylist/typography/type/struct/typography-text-props';

export interface TextRecipe extends HtmlAttributesWithChildren<HTMLElement>, TypographyTextProps {}
