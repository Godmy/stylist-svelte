import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { Props, ClassProp } from '$stylist/information/type/struct';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';

export interface SlotIconButton extends Omit<Props, 'children' | 'icon'>, SlotButtonDom {
	class?: string;
	icon?: string | Snippet;
	children?: Snippet;
}
