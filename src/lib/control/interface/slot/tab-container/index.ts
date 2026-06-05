import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';

export interface SlotTabContainer extends HtmlAttributesWithChildren<HTMLDivElement> {
	disabled?: boolean;
}
