import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';
import { TOKEN_DIRECTION } from '$stylist/theme/const/array/direction';
import { TOKEN_SHAPE } from '$stylist/theme/const/array/shape';

export const TOKEN_SVG_SETTING = [
	{ key: 'direction', label: 'Direction', domain: 'svg', controlKind: 'radio', values: TOKEN_DIRECTION },
	{ key: 'shape', label: 'Shape', domain: 'svg', controlKind: 'radio', values: TOKEN_SHAPE },
	{ key: 'variant', label: 'Variant', domain: 'svg', controlKind: 'radio', values: TOKEN_COLOR_TONE }
] satisfies readonly Token[];
