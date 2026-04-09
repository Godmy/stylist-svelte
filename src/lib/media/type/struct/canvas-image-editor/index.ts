import type { CanvasImageEditorRecipe } from '$stylist/media/interface/recipe/canvas-image-editor';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type CanvasImageEditorProps = CanvasImageEditorRecipe & ArchitectureHTMLAttributes<HTMLCanvasElement>;
