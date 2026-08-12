import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { CenteredLayoutAxis } from '$stylist/layout/type/alias/centered-layout-axis';
export interface CenteredLayoutProps extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	children: Snippet;
	axis?: CenteredLayoutAxis;
	fillHeight?: boolean;
	fillWidth?: boolean;
	maxWidth?: string;
}
