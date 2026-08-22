export class ObjectManagerMetricCard {
	static resolveProgressBarWidth(percentage: number): string {
		return `${Math.min(100, Math.max(0, percentage))}%`;
	}
}
