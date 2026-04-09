import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { IMetricValue } from '$stylist/information/interface/proto/metric-value';

/**
 * MetricCard = shared information slots + metric value + analytics progress affordance.
 */
export interface MetricCardRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IMetricValue,
		ThemeAttributes<HTMLDivElement>
	]> {
	percentage: number;
	variant?: TokenAppearance;
	showProgressBar?: boolean;
}
