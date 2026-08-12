import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
export interface RecipeAccessibilityCheckbox
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotStatus]> {}
