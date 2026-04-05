export function formatNumberFlowValue(
	value: number,
	locales: string | string[] = 'en-US',
	format?: Intl.NumberFormatOptions
): string {
	return new Intl.NumberFormat(locales, format).format(value);
}
