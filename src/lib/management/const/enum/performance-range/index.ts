import type { TokenTimeRange } from '$stylist/management/type/enum/time-range';

export const TOKEN_PERFORMANCE_RANGE = ['1d', '7d', '30d', '90d'] as const satisfies readonly TokenTimeRange[];
