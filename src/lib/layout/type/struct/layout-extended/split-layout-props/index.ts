import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { SplitLayoutDirection, SplitLayoutGap, SplitLayoutPanelSize } from '$stylist/layout/class/style-manager/split-layout';

export type SplitLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	primary: Snippet;
	secondary: Snippet;
	gap?: SplitLayoutGap;
	direction?: SplitLayoutDirection;
	primarySize?: SplitLayoutPanelSize;
	secondarySize?: SplitLayoutPanelSize;
	responsive?: boolean;
};
