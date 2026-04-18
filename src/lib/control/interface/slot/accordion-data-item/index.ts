import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { ContentProp } from '$stylist/information/type/struct';
import type { HtmlAttributesWithContent } from '$stylist/information/interface/slot';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface SlotAccordionDataItem {
	id: string;
	title: string;
	content: Snippet | string;
	disabled?: boolean;
}
