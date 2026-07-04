import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotBadge } from '$stylist/information/interface/slot/badge';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotStatus } from '$stylist/information/interface/slot/status';
import type { BehaviorSizable } from '$stylist/layout/interface/behavior/sizable';
import type { AlertCardAction } from '$stylist/commerce/interface/slot/alert-card-action';

export interface RecipeAlertCard
	extends ComputeIntersectAll<
		[
			SlotTheme,
			SlotClass,
			SlotChildren,
			SlotText,
			SlotText,
			SlotIcon,
			SlotStatus,
			SlotBadge,
			SlotMedia,
			BehaviorSizable
		]
	> {
	title?: string;
	subtitle?: string;
	variant?: string;
	disabled?: boolean;
	icon?: string;
	actions?: AlertCardAction[];
}
