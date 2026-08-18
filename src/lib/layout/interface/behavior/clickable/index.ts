import type { GestureContract } from '$stylist/layout/interface/slot/gesture-contract';
import type { TokenCursor } from '$stylist/layout/type/alias/cursor';

export interface BehaviorClickable extends Partial<GestureContract> {
	onClick?: (event: MouseEvent) => void;
	onDblClick?: (event: MouseEvent) => void;
	onContextMenu?: (event: MouseEvent) => void;
	onMouseDown?: (event: MouseEvent) => void;
	onMouseUp?: (event: MouseEvent) => void;
	onMouseEnter?: (event: MouseEvent) => void;
	onMouseLeave?: (event: MouseEvent) => void;
	loading?: boolean;
	cursor?: TokenCursor;
}
