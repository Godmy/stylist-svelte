import type { TokenAlignment as NotificationBadgePosition } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export const NOTIFICATION_BADGE_APPEARANCE_CLASSES: Record<TokenAppearance, string> = {
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
