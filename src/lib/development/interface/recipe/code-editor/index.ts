/**
 * CodeEditor вЂ” СЂРµРґР°РєС‚РѕСЂ РєРѕРґР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface CodeEditorRecipe
	extends StructIntersectAll<[
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

