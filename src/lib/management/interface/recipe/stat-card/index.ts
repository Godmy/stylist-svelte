import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { BehaviorMetricValue as IMetricValue } from '$stylist/information/interface/behavior/metric-value';
import type { BehaviorTrendable } from '$stylist/management/interface/behavior/trendable';

export interface RecipeStatCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			IMetricValue,
			BehaviorTrendable,
			HTMLAttributes<HTMLDivElement>
		]
	> {
	variant?: TokenBackground;
	animated?: boolean;
}
