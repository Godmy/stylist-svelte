import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { SlotPriceAlertElement } from '$stylist/commerce/interface/slot/price-alert-element';
import type { Props } from '$stylist/information/type/struct/props';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenMonitoringType } from '$stylist/commerce/type/alias/monitoring-type';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipePriceAlert
	extends ComputeIntersectAll<
		[
			SlotPriceAlertElement,
			Omit<Props, 'variant' | 'size' | 'onclick' | 'class'>,
			Omit<HTMLAttributes<HTMLDivElement>, 'variant' | 'size' | 'onclick'>,
			SlotTheme,
			BehaviorSizable,
			BehaviorClickable,
			BehaviorBorderToken,
			BehaviorTypography,
			SlotChildren
		]
	> {
	currentPrice?: number;
	targetPrice?: number;
	currency?: string;
	status?: TokenMonitoringType;
	productName?: string;
	variant?: TokenMonitoringType;
	size?: TokenSize;
	disabled?: boolean;
	onStatusChange?: (status: TokenMonitoringType) => void;
}