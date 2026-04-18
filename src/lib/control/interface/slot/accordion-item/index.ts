import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { ContentProp } from '$stylist/information/type/struct';
import type { HtmlAttributesWithContent } from '$stylist/information/interface/slot';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { SlotAccordionBase } from '$stylist/control/interface/slot/accordion-base';

export interface SlotAccordionItem
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof SlotAccordionBase>,
		SlotAccordionBase {}
