import type { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';

export const RADIO_GROUP_LAYOUT_CLASS: Record<(typeof TOKEN_ORIENTATION)[number], string> = {
	horizontal: 'flex flex-wrap gap-4',
	vertical: 'flex flex-col gap-3'
};
