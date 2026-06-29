import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_FONT_SIZE } from '$stylist/typography/const/array/font-size';
import { TOKEN_FONT_WEIGHT } from '$stylist/typography/const/array/font-weight';
import { TOKEN_TYPOGRAPHY_TONE } from '$stylist/typography/const/array/tone';

export const TOKEN_TYPOGRAPHY_SETTING = [
	{ key: 'font-size', label: 'Font Size', domain: 'typography', controlKind: 'radio', values: TOKEN_FONT_SIZE },
	{ key: 'font-weight', label: 'Font Weight', domain: 'typography', controlKind: 'radio', values: TOKEN_FONT_WEIGHT },
	{ key: 'tone', label: 'Tone', domain: 'typography', controlKind: 'radio', values: TOKEN_TYPOGRAPHY_TONE }
] satisfies readonly Token[];