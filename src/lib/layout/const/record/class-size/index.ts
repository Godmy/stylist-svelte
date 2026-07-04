import type { TokenSize } from '$stylist/theme/type/alias/size';
import { RECORD_PADDING } from '$stylist/layout/const/record/padding/index';

const RECORD_TEXT_SIZE_LOCAL: Record<TokenSize, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'1/4': 'text-xs',
	'1/3': 'text-sm',
	'2/5': 'text-sm',
	'1/2': 'text-base',
	'3/5': 'text-base',
	'2/3': 'text-lg',
	'3/4': 'text-xl',
	full: 'text-2xl'
};

export const RECORD_CLASS_SIZE: Record<TokenSize, string> = {
	xs: `${RECORD_PADDING.xs} ${RECORD_TEXT_SIZE_LOCAL.xs}`,
	sm: `${RECORD_PADDING.sm} ${RECORD_TEXT_SIZE_LOCAL.sm}`,
	md: `${RECORD_PADDING.md} ${RECORD_TEXT_SIZE_LOCAL.md}`,
	lg: `${RECORD_PADDING.lg} ${RECORD_TEXT_SIZE_LOCAL.lg}`,
	xl: `${RECORD_PADDING.xl} ${RECORD_TEXT_SIZE_LOCAL.xl}`,
	'2xl': `${RECORD_PADDING['2xl']} ${RECORD_TEXT_SIZE_LOCAL['2xl']}`,
	'1/4': `${RECORD_PADDING['1/4']} ${RECORD_TEXT_SIZE_LOCAL['1/4']}`,
	'1/3': `${RECORD_PADDING['1/3']} ${RECORD_TEXT_SIZE_LOCAL['1/3']}`,
	'2/5': `${RECORD_PADDING['2/5']} ${RECORD_TEXT_SIZE_LOCAL['2/5']}`,
	'1/2': `${RECORD_PADDING['1/2']} ${RECORD_TEXT_SIZE_LOCAL['1/2']}`,
	'3/5': `${RECORD_PADDING['3/5']} ${RECORD_TEXT_SIZE_LOCAL['3/5']}`,
	'2/3': `${RECORD_PADDING['2/3']} ${RECORD_TEXT_SIZE_LOCAL['2/3']}`,
	'3/4': `${RECORD_PADDING['3/4']} ${RECORD_TEXT_SIZE_LOCAL['3/4']}`,
	full: `${RECORD_PADDING.full} ${RECORD_TEXT_SIZE_LOCAL.full}`
};
