import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';

/**
 * MetricCard = shared information slots + metric value + analytics progress affordance.
 */
export interface MetricCardRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IMetricValue,
		ThemeAttributes<HTMLDivElement>
	]> {
	percentage: number;
	variant?: TokenAppearance;
	showProgressBar?: boolean;
}

