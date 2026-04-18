import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { Props, ClassProp } from '$stylist/information/type/struct';

export interface SlotButtonAttributesBase extends Omit<HTMLButtonAttributes, 'class'>, ClassProp {}
