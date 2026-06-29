import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_COLOR_TONE } from '$stylist/color/const/array/tone';

export const TOKEN_COLOR_SETTING = [
	{ key: 'tone', label: 'Tone', domain: 'color', controlKind: 'radio', values: TOKEN_COLOR_TONE }
] satisfies readonly Token[];