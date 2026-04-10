import type { HTMLButtonAttributes } from 'svelte/elements';
import type { BurgerMenuProps as BurgerMenuComponentProps } from '$stylist/control/interface/component/burger-menu/other';

export type BurgerMenuProps = BurgerMenuComponentProps & HTMLButtonAttributes;
