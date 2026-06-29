import type { Token } from '$stylist/token/type/struct/token';
import { MAP_PROVIDER } from '$stylist/geo/const/array/map-provider';
import { TOKEN_MAP_TYPE } from '$stylist/geo/const/array/map-type';
import { TOKEN_PIN } from '$stylist/geo/const/array/pin';

export const TOKEN_GEO_SETTING = [
	{ key: 'map-provider', label: 'Map Provider', domain: 'geo', controlKind: 'radio', values: MAP_PROVIDER },
	{ key: 'map-type', label: 'Map Type', domain: 'geo', controlKind: 'radio', values: TOKEN_MAP_TYPE },
	{ key: 'pin', label: 'Pin', domain: 'geo', controlKind: 'radio', values: TOKEN_PIN }
] satisfies readonly Token[];
