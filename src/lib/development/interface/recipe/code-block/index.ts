import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeLanguage } from '$stylist/development/type/enum/code-language';
import type { TokenCodeView } from '$stylist/development/type/enum/code-view';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CodeBlockRecipe extends StructIntersectAll<[ThemeAttributes<HTMLPreElement>]> {
	language?: TokenCodeLanguage | 'text';
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}
