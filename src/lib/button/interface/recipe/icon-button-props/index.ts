import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotButtonDom } from '$stylist/button/interface/slot/button-dom';
import type { SlotIconButton as BaseIconButtonProps } from '$stylist/button/interface/slot/icon-button';
import type { Props } from '$stylist/information/type/struct/props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeIconButtonProps
	extends ComputeIntersectAll<[BaseIconButtonProps, Omit<Props, 'children' | 'icon'>, SlotButtonDom, SlotChildren, HTMLAttributes<HTMLButtonElement>]> {}
