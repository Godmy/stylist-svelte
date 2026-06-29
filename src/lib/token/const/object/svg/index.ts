import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_DIRECTION } from '$stylist/svg/const/array/direction';
import { TOKEN_SHAPE } from '$stylist/svg/const/array/shape';
import { TOKEN_VARIANT } from '$stylist/svg/const/array/variant';

export const TOKEN_SVG_SETTING = [
	{ key: 'direction', label: 'Direction', domain: 'svg', controlKind: 'radio', values: TOKEN_DIRECTION },
	{ key: 'shape', label: 'Shape', domain: 'svg', controlKind: 'radio', values: TOKEN_SHAPE },
	{ key: 'variant', label: 'Variant', domain: 'svg', controlKind: 'radio', values: TOKEN_VARIANT }
] satisfies readonly Token[];