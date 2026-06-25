import type { GridItemContent } from '$stylist/layout/type/struct/grid-item/grid-itemcontent';

export type GridItem = {
	id: string;
	content: GridItemContent;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
};
