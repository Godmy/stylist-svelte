import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export type NotificationType =
	| 'silent'
	| Extract<TokenColorTone, 'info' | 'success' | 'warning' | 'error'>;
