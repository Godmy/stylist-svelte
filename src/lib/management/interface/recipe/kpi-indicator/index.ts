import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { TokenKPI } from '$stylist/management/type/alias/kpi';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { BehaviorTrendable as ITrendable } from '$stylist/management/interface/behavior/trendable';

export interface RecipeKPIIndicator
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, IMetricValue, ITrendable, ISizable, HTMLAttributes<HTMLDivElement>]
	> {
	status?: TokenKPI;
	titleClass?: string;
	valueClass?: string;
}
