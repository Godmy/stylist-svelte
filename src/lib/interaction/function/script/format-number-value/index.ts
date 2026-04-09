export interface NumberFormatOptions {
	format?: (n: number) => string;
	separator?: string;
	decimals?: number;
}

export function formatNumberValue(value: number, options: NumberFormatOptions): string {
	if (options.format) return options.format(value);

	const decimals = options.decimals ?? 0;
	const separator = options.separator ?? ',';
	const fixedValue = value.toFixed(decimals);
	const [integerPart, fractionPart] = fixedValue.split('.');
	const groupedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

	return fractionPart ? `${groupedIntegerPart}.${fractionPart}` : groupedIntegerPart;
}
