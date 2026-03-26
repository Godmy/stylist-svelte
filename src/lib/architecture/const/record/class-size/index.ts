import type { TokenSize } from '$stylist/architecture/type/token/size';
import { RECORD_PADDING } from '$stylist/architecture/const/record/padding/index';
import { RECORD_TEXT_SIZE } from '$stylist/architecture/const/record/text-size/index';

export const RECORD_CLASS_SIZE: Record<TokenSize, string> = {
	xs: `${RECORD_PADDING.xs} ${RECORD_TEXT_SIZE.xs}`,
	sm: `${RECORD_PADDING.sm} ${RECORD_TEXT_SIZE.sm}`,
	md: `${RECORD_PADDING.md} ${RECORD_TEXT_SIZE.md}`,
	lg: `${RECORD_PADDING.lg} ${RECORD_TEXT_SIZE.lg}`,
	xl: `${RECORD_PADDING.xl} ${RECORD_TEXT_SIZE.xl}`,
	'2xl': `${RECORD_PADDING['2xl']} ${RECORD_TEXT_SIZE['2xl']}`,
	'1/4': `${RECORD_PADDING['1/4']} ${RECORD_TEXT_SIZE['1/4']}`,
	'1/3': `${RECORD_PADDING['1/3']} ${RECORD_TEXT_SIZE['1/3']}`,
	'2/5': `${RECORD_PADDING['2/5']} ${RECORD_TEXT_SIZE['2/5']}`,
	'1/2': `${RECORD_PADDING['1/2']} ${RECORD_TEXT_SIZE['1/2']}`,
	'3/5': `${RECORD_PADDING['3/5']} ${RECORD_TEXT_SIZE['3/5']}`,
	'2/3': `${RECORD_PADDING['2/3']} ${RECORD_TEXT_SIZE['2/3']}`,
	'3/4': `${RECORD_PADDING['3/4']} ${RECORD_TEXT_SIZE['3/4']}`,
	full: `${RECORD_PADDING.full} ${RECORD_TEXT_SIZE.full}`
};
