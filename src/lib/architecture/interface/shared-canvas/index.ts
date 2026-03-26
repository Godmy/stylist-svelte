import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { CanvasObject, CanvasUser } from '$stylist/architecture/type/attribute/shared-canvas';

export interface SharedCanvasProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
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

export type { CanvasObject, CanvasUser };
