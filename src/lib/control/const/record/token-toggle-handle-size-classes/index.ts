import type { TokenSize } from '$stylist/layout/type/enum/size';

export const TOKEN_TOGGLE_HANDLE_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'h-2.5 w-2.5',
	sm: 'h-3 w-3',
	md: 'h-4 w-4',
	lg: 'h-5 w-5',
	xl: 'h-6 w-6',
	'2xl': 'h-7 w-7',
	'1/4': 'h-2.5 w-2.5',
	'1/3': 'h-3 w-3',
	'2/5': 'h-3 w-3',
	'1/2': 'h-4 w-4',
	'3/5': 'h-4 w-4',
	'2/3': 'h-5 w-5',
	'3/4': 'h-6 w-6',
	full: 'h-7 w-7'
};
