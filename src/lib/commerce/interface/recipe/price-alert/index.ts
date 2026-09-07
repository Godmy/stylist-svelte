import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorClickable } from '$stylist/layout/interface/behavior/clickable';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenMonitoringType } from '$stylist/commerce/type/alias/monitoring-type';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { HTMLAttributes } from 'svelte/elements';
export interface RecipePriceAlert
	extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick'>,
			SlotTheme,
			BehaviorSizable,
			BehaviorClickable,
			SlotThemeBorder,
			SlotTypography,
			SlotChildren
		]
	> {
	class?: string;
	onclick?: ((event: MouseEvent) => void) | undefined;

	currentPrice?: number;
	targetPrice?: number;
	currency?: string;
	status?: TokenMonitoringType;
	productName?: string;
	variant?: TokenMonitoringType;
	size?: TokenSize;
	disabled?: boolean;
	onStatusChange?: (status: TokenMonitoringType) => void;
	[prop: string]: unknown;
}
