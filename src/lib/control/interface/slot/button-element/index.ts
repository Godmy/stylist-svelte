import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { Props, ClassProp } from '$stylist/information/type/struct';
import type { SlotButtonDom } from '$stylist/control/interface/slot/button-dom';
import type { SlotButtonCore } from '$stylist/control/interface/slot/button-core';

export interface SlotButtonElement extends Omit<SlotButtonCore, 'children'>, SlotButtonDom {
	class?: string;
	children?: Snippet;
}
