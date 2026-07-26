import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeCanvasImageEditor } from '$stylist/media/interface/recipe/canvas-image-editor';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';

export type CanvasImageEditorProps = RecipeCanvasImageEditor &
	LayoutHTMLAttributes<HTMLCanvasElement>;
