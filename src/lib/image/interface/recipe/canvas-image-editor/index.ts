import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeCanvasImageEditor extends Omit<HTMLAttributes<HTMLCanvasElement>, 'class'> {
	width?: number;
	height?: number;
	src?: string;
	cropEnabled?: boolean;
	filter?:
		| 'none'
		| 'grayscale'
		| 'sepia'
		| 'invert'
		| 'blur'
		| 'brightness'
		| 'contrast'
		| 'saturate'
		| 'hue-rotate';
	brightness?: number;
	contrast?: number;
	saturation?: number;
	hue?: number;
	class?: string;
}
