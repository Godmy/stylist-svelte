import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBurgerMenu } from '$stylist/navigation/interface/slot/burger-menu';

export interface RecipeBurgerMenu
	extends ComputeIntersectAll<[SlotBurgerMenu, HTMLAttributes<HTMLButtonElement>]> {}
