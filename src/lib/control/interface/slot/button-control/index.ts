import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { Props, ClassProp } from '$stylist/information/type/struct';
import type { SlotButtonAttributesBase } from '$stylist/control/interface/slot/button-attributes-base';

export interface SlotButtonControl extends SlotButtonAttributesBase {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
	onClick?: () => void;
}
