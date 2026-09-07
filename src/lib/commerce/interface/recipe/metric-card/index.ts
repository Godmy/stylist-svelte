import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotStatus } from '$stylist/ai/interface/slot/status';
import type { BehaviorMetricValue } from '$stylist/chart/interface/behavior/metric-value';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
export interface RecipeMetricCard
	extends ComputeIntersectAll<
		[SlotTheme, SlotClass, SlotText, SlotText, SlotBadge, SlotStatus, BehaviorMetricValue]
	> {
	description?: string;
	variant?: TokenColorTone;
	showProgressBar?: boolean;
}
