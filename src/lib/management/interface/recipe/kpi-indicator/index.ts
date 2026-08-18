import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { TokenKPI } from '$stylist/management/type/alias/kpi';
import type { BehaviorMetricValue } from '$stylist/chart/interface/behavior/metric-value';
import type { BehaviorTrendable } from '$stylist/management/interface/behavior/trendable';
export interface RecipeKPIIndicator
	extends ComputeIntersectAll<
		[SlotTheme, SlotText, BehaviorMetricValue, BehaviorTrendable, BehaviorSizable, HTMLAttributes<HTMLDivElement>]
	> {
	status?: TokenKPI;
	titleClass?: string;
	valueClass?: string;
}
