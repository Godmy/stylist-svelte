import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';

export interface SlotTabPanel extends HtmlAttributesWithChildren<HTMLDivElement> {
	id: string;
	disabled?: boolean;
}
