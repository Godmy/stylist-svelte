import type { StatsCardTrend } from '$stylist/information/type/struct/stats-card';
import { STATS_CARD_TREND_ICON } from '$stylist/information/const/record/stats-card-trend-icon';
import { STATS_CARD_TREND_CLASS } from '$stylist/information/const/record/stats-card-trend-class';

export class ObjectManagerStatsCard {
	static resolveTrendClass(trend: StatsCardTrend): string {
		return STATS_CARD_TREND_CLASS[trend];
	}

	static resolveTrendIconName(trend: StatsCardTrend): string {
		return STATS_CARD_TREND_ICON[trend];
	}
}
