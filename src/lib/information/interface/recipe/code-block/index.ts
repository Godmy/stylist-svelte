import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeLanguage } from '$stylist/information/type/enum/code-language';
import type { TokenCodeView } from '$stylist/information/type/enum/code-view';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CodeBlockRecipe extends ThemeAttributes<HTMLPreElement> {
	language?: TokenCodeLanguage | 'text';
	variant?: TokenCodeView;
	size?: TokenSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}
