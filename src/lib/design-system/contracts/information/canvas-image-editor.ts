import type { HTMLCanvasAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenImageFilter } from '$stylist/design-system/tokens/information/image-filter';

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
	filter?: TokenImageFilter;
	cropArea?: CropArea;
	brightness?: number;
	contrast?: number;
	saturation?: number;
	hue?: number;
	variant?: 'default' | 'minimal' | 'advanced';
	size?: TokenSize;
	class?: string;
}


