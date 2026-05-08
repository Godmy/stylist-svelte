import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeView } from '$stylist/development/type/enum/code-view';

export interface ThemeSyntaxHighlightedCodeRecipe extends StructIntersectAll<[HTMLAttributes<HTMLDivElement>]> {	class?: string;
	code?: string;
	language?: string;
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}
