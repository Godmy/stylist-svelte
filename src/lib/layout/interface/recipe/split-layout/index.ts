import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export interface RecipeSplitLayout extends LayoutHTMLAttributes<HTMLDivElement> {
	class?: string;
	primary: Snippet;
	secondary: Snippet;
	gap?: SplitLayoutGap;
	direction?: TokenOrientation;
	primarySize?: (typeof TOKEN_SIZE)[number];
	secondarySize?: (typeof TOKEN_SIZE)[number];
	responsive?: boolean;
}
