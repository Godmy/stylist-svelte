import type { TokenSize } from '$stylist/layout/type/alias/size';

export const CARD_SIZE_CLASSES: Partial<Record<TokenSize, string>> = {
	sm: 'p-3',
	md: 'p-4',
	lg: 'p-6',
	xl: 'p-8'
};
