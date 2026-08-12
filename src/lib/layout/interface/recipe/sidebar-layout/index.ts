import type { Snippet } from 'svelte';
import type { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export interface RecipeSidebarLayout extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	sidebar: Snippet;
	children: Snippet;
	side?: (typeof TOKEN_ALIGNMENT)[number];
	sidebarWidth?: (typeof TOKEN_SIZE)[number];
	gap?: SplitLayoutGap;
	collapsed?: boolean;
	fillHeight?: boolean;
	responsive?: boolean;
	sidebarLabel?: string;
}
