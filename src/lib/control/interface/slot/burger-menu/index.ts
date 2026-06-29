import type { TokenSize } from '$stylist/layout/type/alias/size';

export interface SlotBurgerMenu {
	open?: boolean;
	size?: TokenSize;
	color?: string;
	activeColor?: string;
	class?: string;
	onValueInput?: (event: MouseEvent) => void;
	onValueChange?: (event: MouseEvent) => void;
}
