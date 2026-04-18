import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { ContentProp } from '$stylist/information/type/struct';
import type { HtmlAttributesWithContent } from '$stylist/information/interface/slot';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { SlotAccordionDataItem } from '$stylist/control/interface/slot/accordion-data-item';

export interface SlotAccordion {
	items: SlotAccordionDataItem[];
	multiple?: boolean;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	contentClass?: string;
}
