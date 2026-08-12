import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeCodeEditor
	extends ComputeIntersectAll<[SlotTheme, SlotText]> {
	code?: string;
	language?: string;
	height?: string;
	width?: string;
	readOnly?: boolean;
	showLineNumbers?: boolean;
	FONT_SIZE?: number;
	showCopyButton?: boolean;
	onCodeChange?: (code: string) => void;
}
