import type { TokenAlignment as NotificationBadgePosition } from '$stylist/architecture/type/token/alignment';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { TokenMarker } from '$stylist/architecture/type/token/marker';
import { cn } from '$stylist/information/function/cn/index';

const NOTIFICATION_BADGE_BASE_CLASSES =
	'absolute inline-flex items-center justify-center rounded-full font-medium ring-2 ring-[var(--color-background-primary)]';

const NOTIFICATION_BADGE_POSITION_CLASSES = {
	'top-end': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
	'top-start': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
	'bottom-end': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
	'bottom-start': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
} as const;

const NOTIFICATION_BADGE_APPEARANCE_CLASSES: Record<TokenAppearance, string> = {
	default: 'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)]',
	primary: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]',
	secondary: 'bg-[var(--color-secondary-600)] text-[var(--color-text-inverse)]',
	success: 'bg-[var(--color-success-600)] text-[var(--color-text-inverse)]',
	warning: 'bg-[var(--color-warning-500)] text-[var(--color-text-inverse)]',
	danger: 'bg-[var(--color-danger-600)] text-[var(--color-text-inverse)]',
	error: 'bg-[var(--color-danger-600)] text-[var(--color-text-inverse)]',
	info: 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]',
	gray: 'bg-[var(--color-neutral-500)] text-[var(--color-text-inverse)]',
	neutral: 'bg-[var(--color-neutral-500)] text-[var(--color-text-inverse)]',
	solid: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]',
	outline:
		'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)]',
	ghost: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)]',
	link: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]',
	subtle: 'bg-[var(--color-neutral-200)] text-[var(--color-text-primary)]',
	dark: 'bg-[var(--color-neutral-900)] text-[var(--color-text-inverse)]',
	light: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)]',
	elevated: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] shadow-md border border-[var(--color-border-secondary)]',
	flat: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]'
};

const NOTIFICATION_BADGE_MARKER_CLASSES: Record<TokenMarker, string> = {
	dot: 'h-3 w-3 text-transparent p-0',
	number: 'min-w-5 h-5 px-1.5 text-[10px] leading-none',
	letter: 'min-w-5 h-5 px-1.5 text-[10px] leading-none',
	check: 'h-5 w-5 text-[10px] leading-none',
	x: 'h-5 w-5 text-[10px] leading-none'
};

export class NotificationBadgeStyleManager {
	static getContainerClasses(className = ''): string {
		return cn('relative inline-flex', className);
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

		return cn(NOTIFICATION_BADGE_BASE_CLASSES, positionClasses, markerClasses, appearanceClasses, badgeClass);
	}
}
