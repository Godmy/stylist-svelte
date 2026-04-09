import type { TokenSize } from '$stylist/layout/type/enum/size';

export const TOOLTIP_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'px-2 py-1 text-xs max-w-[150px]',
	sm: 'px-2.5 py-1.5 text-xs max-w-[200px]',
	md: 'px-3 py-2 text-sm max-w-[250px]',
	lg: 'px-4 py-2.5 text-base max-w-[300px]',
	xl: 'px-5 py-3 text-base max-w-[350px]',
	'2xl': 'px-6 py-3.5 text-lg max-w-[400px]',
	'1/4': 'px-2 py-1 text-xs max-w-[150px]',
	'1/3': 'px-2.5 py-1.5 text-xs max-w-[200px]',
	'2/5': 'px-2.5 py-1.5 text-xs max-w-[200px]',
	'1/2': 'px-3 py-2 text-sm max-w-[250px]',
	'3/5': 'px-3 py-2 text-sm max-w-[250px]',
	'2/3': 'px-4 py-2.5 text-base max-w-[300px]',
	'3/4': 'px-5 py-3 text-base max-w-[350px]',
	full: 'px-6 py-3.5 text-lg max-w-none w-full'
};
