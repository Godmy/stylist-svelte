import type { HTMLAttributes } from 'svelte/elements';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { ContentList } from '$stylist/theme/interface/slot/content-list';

export interface SlotInputHelper<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		SlotClass,
		ContentList {
	text?: string;
	variant?: TokenColorTone;
}
