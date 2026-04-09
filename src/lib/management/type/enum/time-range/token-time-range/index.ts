/**
 * TokenTimeRange — тип временного диапазона для аналитики.
 */
import { TOKEN_TIME_RANGE } from '$stylist/management/const/enum/time-range';

export type TokenTimeRange = (typeof TOKEN_TIME_RANGE)[number];
