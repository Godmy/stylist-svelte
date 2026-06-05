import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';

export interface SlotInlineBase<T extends HTMLElement = HTMLElement>
	extends HtmlAttributesWithChildren<T> {}
