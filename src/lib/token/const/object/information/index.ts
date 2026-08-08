import type { Token } from '$stylist/token/type/struct/token';
import { LIST_ITEM_MARKER_TYPE } from '$stylist/list/const/array/list-item-marker-type';
import { TOKEN_SOFTWARE_BADGE } from '$stylist/development/const/array/software-badge';
import { STATUS_STATE } from '$stylist/information/const/array/status-state';
import { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';

export const TOKEN_INFORMATION_SETTING = [
	{ key: 'list-item-marker-type', label: 'List Item Marker Type', domain: 'list', controlKind: 'radio', values: LIST_ITEM_MARKER_TYPE },
	{ key: 'software-badge', label: 'Software Badge', domain: 'development', controlKind: 'radio', values: TOKEN_SOFTWARE_BADGE },
	{ key: 'status', label: 'Status', domain: 'information', controlKind: 'radio', values: TOKEN_COLOR_TONE },
	{ key: 'status-state', label: 'Status State', domain: 'information', controlKind: 'radio', values: STATUS_STATE }
] satisfies readonly Token[];
