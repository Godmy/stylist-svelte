import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenCodeView } from '$stylist/development/type/alias/code-view';

export interface RecipeThemeSyntaxHighlightedCode
	extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>]> {
	class?: string;
	code?: string;
	language?: string;
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}
