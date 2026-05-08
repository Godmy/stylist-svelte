export class ObjectManagerStatCard {
	static resolveNumericValue(value: string | number): number | null {
		if (typeof value === 'number') {
			return value;
		}

		const parsedValue = parseFloat(value.replace(/[^\d.-]/g, ''));
		return Number.isNaN(parsedValue) ? null : parsedValue;
	}
}
