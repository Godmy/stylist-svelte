import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export type NotificationType =
	| 'silent'
	| Extract<TokenAppearance, 'info' | 'success' | 'warning' | 'error'>;
