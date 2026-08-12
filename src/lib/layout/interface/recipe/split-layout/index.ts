import type { Snippet } from 'svelte';
import type { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export interface SplitLayoutProps extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	primary: Snippet;
	secondary: Snippet;
	gap?: SplitLayoutGap;
	direction?: (typeof TOKEN_ORIENTATION)[number];
	primarySize?: (typeof TOKEN_SIZE)[number];
	secondarySize?: (typeof TOKEN_SIZE)[number];
	responsive?: boolean;
}
