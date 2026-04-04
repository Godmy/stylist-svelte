import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeView } from '$stylist/information/type/enum/code-view';

export type ThemeSyntaxHighlightedCodeRecipe = HTMLAttributes<HTMLDivElement> & {
	class?: string;
	code?: string;
	language?: string;
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
};
