import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphCanvasRecipe
	extends StructIntersectAll<[ChildrenProp, ThemeAttributes<HTMLDivElement>]>
{
	width?: number;
	height?: number;
	zoom?: number;
	offsetX?: number;
	offsetY?: number;
	gridSize?: number;
	gridMode?: string;
	gridColor?: string;
	backgroundColor?: string;
	snapToGrid?: boolean;
	gridClass?: string;
	contentClass?: string;
}
