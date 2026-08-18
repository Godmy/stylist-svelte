import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotImage } from '$stylist/image/interface/slot/image';
import type { SlotStatus } from '$stylist/ai/interface/slot/status';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
export interface RecipeAlertCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			SlotClass,
			SlotChildren,
			SlotText,
			SlotIcon,
			SlotStatus,
			SlotBadge,
			SlotImage,
			BehaviorSizable
		]
	> {
	title?: string;
	subtitle?: string;
	variant?: string;
	disabled?: boolean;
	icon?: string;
	actions?: ({
label: string;
	onClick?: () => void;
})[];
}
