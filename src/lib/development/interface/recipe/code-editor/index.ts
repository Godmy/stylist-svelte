import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotDimensionable } from '$stylist/layout/interface/slot/dimensionable';
export interface RecipeCodeEditor
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotDimensionable]> {
	code?: string;
	language?: string;
	readOnly?: boolean;
	showLineNumbers?: boolean;
	FONT_SIZE?: number;
	showCopyButton?: boolean;
	onCodeChange?: (code: string) => void;
}
