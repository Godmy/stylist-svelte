import type { HtmlAttributesWithContent } from '$stylist/information/interface/slot/html-attributes-with-content';

export interface SlotComplexAccordion extends HtmlAttributesWithContent<HTMLDivElement> {
	multiple?: boolean;
	defaultValue?: string[];
	value?: string[];
	onValueChange?: (value: string[]) => void;
}
