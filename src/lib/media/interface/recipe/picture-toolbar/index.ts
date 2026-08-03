import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

type PictureToolbarTool = { [key: string]: any };

export interface RecipePictureToolbar
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot]> {
	tools: PictureToolbarTool[];
	activeTool?: string;
	onToolSelect?: (toolId: string) => void;
}
