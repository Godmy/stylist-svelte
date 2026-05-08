import type { GraphToolbarRecipe } from '$stylist/science/interface/recipe/graph-toolbar';
import type { GraphToolbarItem } from '../graph-toolbar-item';

export type GraphToolbarProps = GraphToolbarRecipe & {
	items?: GraphToolbarItem[];
	onItemClick?: (id: string) => void;
	onValueChange?: (id: string, value: unknown) => void;
};
