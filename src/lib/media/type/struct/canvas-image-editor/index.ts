import type { CanvasImageEditorRecipe } from '$stylist/media/interface/recipe/canvas-image-editor';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export type CanvasImageEditorProps = CanvasImageEditorRecipe &
	ArchitectureHTMLAttributes<HTMLCanvasElement>;
