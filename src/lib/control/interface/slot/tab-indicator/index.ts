import type { HTMLButtonAttributes, HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { Snippet } from 'svelte';

export interface SlotTabIndicator extends HtmlAttributesBase<HTMLDivElement> {
	left?: string;
	width?: string;
	color?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
}
