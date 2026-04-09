import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export type CanvasObject = {
	id: string;
	type: 'rectangle' | 'circle' | 'text' | 'path';
	x: number;
	y: number;
	width?: number;
	height?: number;
	radius?: number;
	text?: string;
	points?: { x: number; y: number }[];
	color: string;
	userId?: string;
};

export type CanvasUser = {
	id: string;
	name: string;
	color: string;
	cursorPosition?: { x: number; y: number };
};

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
