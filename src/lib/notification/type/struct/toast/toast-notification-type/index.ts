import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export type ToastNotificationType =
	| 'silent'
	| Extract<TokenAppearance, 'info' | 'success' | 'warning' | 'error'>;
