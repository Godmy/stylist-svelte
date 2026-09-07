import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { TokenBackground } from '$stylist/layout/type/alias/background';
import type { BehaviorMetricValue } from '$stylist/chart/interface/behavior/metric-value';
import type { BehaviorTrendable } from '$stylist/management/interface/behavior/trendable';
export interface RecipeStatCard
	extends ComputeIntersectAll<
		[SlotTheme, SlotText, SlotIcon, BehaviorMetricValue, BehaviorTrendable]
	> {
	variant?: TokenBackground;
	animated?: boolean;
}
