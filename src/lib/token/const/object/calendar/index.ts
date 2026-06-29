import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_CALENDAR } from '$stylist/calendar/const/array/calendar-enum';
import { TOKEN_PRIORITY } from '$stylist/calendar/const/array/priority';
import { TOKEN_TIMESTAMP_FORMAT } from '$stylist/calendar/const/array/timestamp-format';
import { TOKEN_TIME_RANGE } from '$stylist/calendar/const/array/token-time-range';

export const TOKEN_CALENDAR_SETTING = [
	{ key: 'calendar-enum', label: 'Calendar Enum', domain: 'calendar', controlKind: 'radio', values: TOKEN_CALENDAR },
	{ key: 'priority', label: 'Priority', domain: 'calendar', controlKind: 'radio', values: TOKEN_PRIORITY },
	{ key: 'timestamp-format', label: 'Timestamp Format', domain: 'calendar', controlKind: 'radio', values: TOKEN_TIMESTAMP_FORMAT },
	{ key: 'token-time-range', label: 'Token Time Range', domain: 'calendar', controlKind: 'radio', values: TOKEN_TIME_RANGE }
] satisfies readonly Token[];