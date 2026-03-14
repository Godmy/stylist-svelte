import type { HTMLCanvasAttributes } from 'svelte/elements';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { ImageFilter } from '$stylist/design-system/tokens/information/image-filters';

export interface CropArea {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface CanvasImageEditorProps extends HTMLCanvasAttributes {
	width?: number;
	height?: number;
	src?: string;
	cropEnabled?: boolean;
	filter?: ImageFilter;
	cropArea?: CropArea;
	brightness?: number;
	contrast?: number;
	saturation?: number;
	hue?: number;
	variant?: 'default' | 'minimal' | 'advanced';
	size?: ComponentSize;
	class?: string;
}
