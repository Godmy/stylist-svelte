import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { SplitLayoutDirection } from '$stylist/layout/type/enum/split-layout-direction';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { SplitLayoutPanelSize } from '$stylist/layout/type/enum/split-layout-panel-size';

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
