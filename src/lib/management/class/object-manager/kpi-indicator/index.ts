import type { TokenTrend } from '$stylist/management/type/enum/trend';
import type { TokenKPI } from '$stylist/management/type/enum/kpi';

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
		switch (trend) {
			case 'up':
				return 'trending-up';
			case 'down':
				return 'trending-down';
			case 'neutral':
			default:
				return 'minus';
		}
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
