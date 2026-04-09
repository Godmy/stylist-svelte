import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const FOLLOW_BUTTON_VARIANT_CLASSES: Record<string, string> = {
	following: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-danger-50)] hover:text-[var(--color-danger-600)] hover:border-[var(--color-danger-200)]',
	notFollowing: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] border border-transparent hover:bg-[var(--color-primary-700)]'
};
