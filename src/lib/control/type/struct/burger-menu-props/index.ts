import type { HTMLButtonAttributes } from 'svelte/elements';
import type { SlotBurgerMenu as BurgerMenuComponentProps } from '$stylist/control/interface/slot/burger-menu';

export type BurgerMenuProps = BurgerMenuComponentProps & HTMLButtonAttributes;
