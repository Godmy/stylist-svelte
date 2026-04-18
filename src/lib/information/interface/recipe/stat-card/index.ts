import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { BehaviorTrendable as ITrendable } from '$stylist/information/interface/behavior/trendable';

/** StatCard = shared information slots + metric value + trend. */
export interface StatCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IMetricValue,
		ITrendable,
		ThemeAttributes<HTMLDivElement>
	]> {
	variant?: TokenBackground;
	animated?: boolean;
}

