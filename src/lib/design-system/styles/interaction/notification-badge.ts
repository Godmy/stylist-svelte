import type { NotificationBadgePosition } from '$stylist/design-system/tokens/interaction/notification-positions';
import type { NotificationBadgeVariant } from '$stylist/design-system/tokens/interaction/variants';
import { cn } from '$stylist/design-system/utils/cn/index';

const NOTIFICATION_BADGE_BASE_CLASSES =
	'absolute inline-flex items-center justify-center rounded-full font-medium ring-2 ring-[var(--color-background-primary)]';

const NOTIFICATION_BADGE_POSITION_CLASSES: Record<NotificationBadgePosition, string> = {
	'top-end': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
	'top-start': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
	'bottom-end': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
	'bottom-start': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'
};

const NOTIFICATION_BADGE_VARIANT_CLASSES: Record<NotificationBadgeVariant, string> = {
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
	number: 'min-w-5 h-5 px-1.5 text-[10px] leading-none bg-[var(--color-danger-600)] text-[var(--color-text-inverse)]',
	dot: 'h-3 w-3 bg-[var(--color-danger-600)] text-transparent'
};

export class NotificationBadgeStyleManager {
	static getContainerClasses(className = ''): string {
		return cn('relative inline-flex', className);
	}

	static getBadgeClasses(
		showDot: boolean,
		variant: NotificationBadgeVariant | string = 'danger',
		position: NotificationBadgePosition | string = 'top-end',
		badgeClass = ''
	): string {
		const normalizedVariant = (showDot ? 'dot' : variant) as NotificationBadgeVariant;
		const variantClasses =
			NOTIFICATION_BADGE_VARIANT_CLASSES[normalizedVariant] ??
			NOTIFICATION_BADGE_VARIANT_CLASSES.danger;
		const positionClasses =
			NOTIFICATION_BADGE_POSITION_CLASSES[position as NotificationBadgePosition] ??
			NOTIFICATION_BADGE_POSITION_CLASSES['top-end'];

		return cn(NOTIFICATION_BADGE_BASE_CLASSES, positionClasses, variantClasses, badgeClass);
	}
}
