import type { HTMLAttributes } from 'svelte/elements';
import type { ClassProp } from '$stylist/information/type/struct/class-prop';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ContentList } from '$stylist/theme/interface/slot/content-list';

export interface SlotInputHelper<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ContentList {
	text?: string;
	variant?: TokenAppearance;
}
