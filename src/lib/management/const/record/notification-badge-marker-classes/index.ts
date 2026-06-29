import type { TokenMarker } from '$stylist/architecture/type/alias/marker';

export const NOTIFICATION_BADGE_MARKER_CLASSES: Record<TokenMarker, string> = {
	none: 'hidden',
	dot: 'h-3 w-3 text-transparent p-0',
	number: 'min-w-5 h-5 px-1.5 text-[10px] leading-none',
	letter: 'min-w-5 h-5 px-1.5 text-[10px] leading-none',
	check: 'h-5 w-5 text-[10px] leading-none',
	x: 'h-5 w-5 text-[10px] leading-none'
};
