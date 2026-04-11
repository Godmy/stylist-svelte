import type { GridItemContent } from '../grid-itemcontent';

export type GridItem = {
	id: string;
	content: GridItemContent;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
};
