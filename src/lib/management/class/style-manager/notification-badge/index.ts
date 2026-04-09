import type { TokenAlignment as NotificationBadgePosition } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { NOTIFICATION_BADGE_APPEARANCE_CLASSES } from '$stylist/management/const/record/notification-badge-appearance-classes';
import { NOTIFICATION_BADGE_MARKER_CLASSES } from '$stylist/management/const/record/notification-badge-marker-classes';

const NOTIFICATION_BADGE_BASE_CLASSES =
	'absolute inline-flex items-center justify-center rounded-full font-medium ring-2 ring-[var(--color-background-primary)]';

const NOTIFICATION_BADGE_POSITION_CLASSES = {
	'top-end': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
	'top-start': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
	'bottom-end': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
	'bottom-start': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
} as const;

export class NotificationBadgeStyleManager {
	static getContainerClasses(className = ''): string {
		return mergeClassNames('relative inline-flex', className);
	}

	static getBadgeClasses(
		marker: TokenMarker | string = 'number',
		appearance: TokenAppearance | string = 'danger',
		position: NotificationBadgePosition | string = 'top-end',
		badgeClass = ''
	): string {
		const normalizedMarker = (marker in NOTIFICATION_BADGE_MARKER_CLASSES ? marker : 'number') as TokenMarker;
		const markerClasses = NOTIFICATION_BADGE_MARKER_CLASSES[normalizedMarker];
		const appearanceClasses =
			NOTIFICATION_BADGE_APPEARANCE_CLASSES[appearance as TokenAppearance] ??
			NOTIFICATION_BADGE_APPEARANCE_CLASSES.danger;
		const normalizedPosition =
			position === 'top-start' || position === 'left-start'
				? 'top-start'
				: position === 'bottom-end' || position === 'right-end'
					? 'bottom-end'
					: position === 'bottom-start' || position === 'left-end'
						? 'bottom-start'
						: 'top-end';
		const positionClasses = NOTIFICATION_BADGE_POSITION_CLASSES[normalizedPosition];

		return mergeClassNames(NOTIFICATION_BADGE_BASE_CLASSES, positionClasses, markerClasses, appearanceClasses, badgeClass);
	}
}

