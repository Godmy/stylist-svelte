import type { TokenKPI } from '$stylist/analytics/type/enum/kpi';
import type { TokenTrend } from '$stylist/analytics/type/enum/trend';

const KPI_TREND_ICON_NAME = {
	up: 'trending-up',
	down: 'trending-down',
	neutral: 'minus'
} as const;

export class ObjectManagerKPIIndicator {
	static resolvePercentage(currentValue: number, targetValue: number): number {
		if (targetValue === 0) {
			return 0;
		}

		return Math.round((currentValue / targetValue) * 100);
	}

	static resolveProgressWidth(percentage: number): string {
		return `${Math.min(percentage, 100)}%`;
	}

	static resolveTrendIconName(trend: TokenTrend): string {
		return KPI_TREND_ICON_NAME[trend];
	}

	static resolveStatusText(status: TokenKPI): string {
		switch (status) {
			case 'at-risk':
				return 'At risk';
			case 'off-track':
				return 'Off track';
			case 'exceeded':
				return 'Exceeded';
			case 'on-track':
			default:
				return 'On track';
		}
	}
}
