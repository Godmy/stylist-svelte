import type { TOKEN_TREND } from '$stylist/management/const/array/trend';
import { STATS_CARD_TREND_ICON } from '$stylist/management/const/record/stats-card-trend-icon';
import { STATS_CARD_TREND_CLASS } from '$stylist/management/const/record/stats-card-trend-class';

export class ObjectManagerStatsCard {
	static resolveTrendClass(trend: (typeof TOKEN_TREND)[number]): string {
		return STATS_CARD_TREND_CLASS[trend];
	}

	static resolveTrendIconName(trend: (typeof TOKEN_TREND)[number]): string {
		return STATS_CARD_TREND_ICON[trend];
	}
}
