type PictureToolbarTool = { [key: string]: any };
import type { PictureToolbarRecipe } from '$stylist/media/interface/recipe/picture-toolbar';

export type PictureToolbarProps = PictureToolbarRecipe & {
	tools: PictureToolbarTool[];
	activeTool?: string;
	onToolSelect?: (toolId: string) => void;
};
