export function calculateWbdSpread(values: number[]): {
	min: number;
	max: number;
	mean: number;
	median: number;
	stdDev: number;
} {
	if (values.length === 0) {
		return { min: 0, max: 0, mean: 0, median: 0, stdDev: 0 };
	}
	const sorted = [...values].sort((a, b) => a - b);
	const min = sorted[0];
	const max = sorted[sorted.length - 1];
	const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
	const middle = Math.floor(sorted.length / 2);
	const median =
		sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
	const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;
	const stdDev = Math.sqrt(variance);
	return { min, max, mean, median, stdDev };
}
