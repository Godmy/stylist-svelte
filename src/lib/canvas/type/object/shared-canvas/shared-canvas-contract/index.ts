import type { CanvasObject } from '$stylist/canvas/type/object/canvas-object';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { AnyProperty } from '$stylist/layout/type/object/any-property';

export type SharedCanvasContract = (LayoutHTMLAttributes<HTMLDivElement> & {
	width?: number;
	height?: number;
	objects?: CanvasObject[];
	users?: AnyProperty[];
	currentUserId?: string;
	currentUser?: AnyProperty;
	onObjectAdd?: (obj: CanvasObject) => void;
	onObjectUpdate?: (obj: CanvasObject) => void;
	onObjectDelete?: (id: string) => void;
	showUsers?: boolean;
	showToolbar?: boolean;
	toolbarClass?: string;
	canvasClass?: string;
	variant?: 'default' | 'minimal';
	size?: TokenSize;
}) & {
	selectedTool?: string;
	selectedColor?: string;
	showZoomControls?: boolean;
};
