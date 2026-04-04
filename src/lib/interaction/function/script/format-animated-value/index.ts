export function formatAnimatedValue(
	value: number | null | undefined,
	options: { format?: 'number' | 'percent' | 'currency'; separator?: string; decimals?: number } = {}
): string {
	const { format = 'number', decimals = 0 } = options;
	const safeValue = Number.isFinite(value) ? (value as number) : 0;

	switch (format) {
		case 'percent':
			return `${(safeValue * 100).toFixed(decimals)}%`;
		case 'currency':
			return `$${safeValue.toLocaleString('en-US', {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			})}`;
		default:
			return safeValue.toLocaleString('en-US', {
				useGrouping: true,
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			});
	}
}
