import { StyleManagerBase } from '$stylist/architecture/class/style-manager/base/index';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const PROGRESS_VARIANT_CLASSES: Partial<Record<TokenAppearance, string>> = {
	success: 'bg-[var(--color-success-500)]',
	warning: 'bg-yellow-500',
	danger: 'bg-[var(--color-danger-500)]',
	info: 'bg-[var(--color-primary-500)]',
	secondary: 'bg-[--color-secondary-500]',
	primary: 'bg-[--color-primary-500]',
	default: 'bg-[--color-primary-500]'
};
