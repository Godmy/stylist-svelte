import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export interface SlotSharedCanvas extends LayoutHTMLAttributes<HTMLDivElement> {
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
}
