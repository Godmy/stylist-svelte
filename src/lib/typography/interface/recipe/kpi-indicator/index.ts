import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenKPI } from '$stylist/typography/type/enum/kpi';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { BehaviorTrendable as ITrendable } from '$stylist/information/interface/behavior/trendable';

/**
 * KPIIndicator = shared label + metric + trend + size with analytics KPI status.
 */
export interface KPIIndicatorRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IMetricValue,
		ITrendable,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]> {
	status?: TokenKPI;
	titleClass?: string;
	valueClass?: string;
}

