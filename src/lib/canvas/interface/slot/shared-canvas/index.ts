import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';
import type { CanvasUser } from '$stylist/canvas/type/struct/canvas-user';

export interface SlotSharedCanvas extends ArchitectureHTMLAttributes<HTMLDivElement> {
	width?: number;
	height?: number;
	objects?: CanvasObject[];
	users?: CanvasUser[];
	currentUserId?: string;
	currentUser?: CanvasUser;
	onObjectAdd?: (obj: CanvasObject) => void;
	onObjectUpdate?: (obj: CanvasObject) => void;
	onObjectDelete?: (id: string) => void;
	showUsers?: boolean;
	showToolbar?: boolean;
	toolbarClass?: string;
	canvasClass?: string;
	variant?: 'default' | 'minimal';
	size?: TokenSize;
}
