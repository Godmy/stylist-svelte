import type { Token } from '$stylist/token/type/struct/token';
import { SPINNER_VARIANT } from '$stylist/notification/const/array/spinner-variant';

export const TOKEN_NOTIFICATION_SETTING = [
	{ key: 'spinner-variant', label: 'Spinner Variant', domain: 'notification', controlKind: 'radio', values: SPINNER_VARIANT }
] satisfies readonly Token[];