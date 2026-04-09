import type { TokenAlignment as NotificationBadgePosition } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const NOTIFICATION_BADGE_MARKER_CLASSES: Record<TokenMarker, string> = {
	none: 'hidden',
	dot: 'h-3 w-3 text-transparent p-0',
	number: 'min-w-5 h-5 px-1.5 text-[10px] leading-none',
	letter: 'min-w-5 h-5 px-1.5 text-[10px] leading-none',
	check: 'h-5 w-5 text-[10px] leading-none',
	x: 'h-5 w-5 text-[10px] leading-none'
};
