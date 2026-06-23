import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';

export interface SlotNotificationBadge extends SlotChildren {
	count?: number;
	maxCount?: number;
	marker?: TokenMarker;
	appearance?: TokenAppearance;
	position?: TokenAlignment;
	showZero?: boolean;
	badgeClass?: string;
	class?: string;
}
