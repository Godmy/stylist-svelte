import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { ContentProp } from '$stylist/information/type/struct';
import type { HtmlAttributesWithContent } from '$stylist/information/interface/slot';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface SlotComplexAccordion extends HtmlAttributesWithContent<HTMLDivElement> {
	multiple?: boolean;
	defaultValue?: string[];
	value?: string[];
	onValueChange?: (value: string[]) => void;
}
