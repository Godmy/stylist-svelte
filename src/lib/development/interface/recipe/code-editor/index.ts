/**
 * CodeEditor — редактор кода..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CodeEditorRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
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
