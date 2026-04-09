import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { IMetricValue } from '$stylist/information/interface/proto/metric-value';
import type { ITrendable } from '$stylist/information/interface/proto/trendable';

/** StatCard = shared information slots + metric value + trend. */
export interface StatCardRecipe
	extends RecordArchitectureMerge<[
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
