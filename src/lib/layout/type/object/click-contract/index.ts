import type { GestureContract } from '$stylist/layout/type/object/gesture-contract';

export type ClickContract = GestureContract & {
	onClick?: (event: MouseEvent) => void;
	onDblClick?: (event: MouseEvent) => void;
	onContextMenu?: (event: MouseEvent) => void;
};
