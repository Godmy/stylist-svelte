import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';

export interface RecipeMetricCard
	extends ComputeIntersectAll<[SlotTheme, ILabelSlot, ICaptionSlot, IMetricValue]> {
	percentage: number;
	variant?: TokenColorTone;
	showProgressBar?: boolean;
}
