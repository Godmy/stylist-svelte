export const DEFAULT_LANGUAGE = 'en';

export const getNumberFlowClasses = (className = '') => ({
	container: `flex items-center ${className}`,
	prefix: 'mr-1',
	suffix: 'ml-1',
	srOnly: 'sr-only'
});

export const formatNumberFlowValue = (
	value: number,
	locales: string | string[] = 'en-US',
	format?: Intl.NumberFormatOptions
) => new Intl.NumberFormat(locales, format).format(value);

export const animateNumberValue = ({ value }: { value: number }) => value;
export const formatAnimatedValue = (
	value: number,
	options: { format?: 'number' | 'percent' | 'currency'; separator?: string; decimals?: number } = {}
) => {
	const decimals = options.decimals ?? 0;
	const separator = options.separator ?? ',';
	return value
		.toLocaleString('en-US', {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		})
		.replace(/,/g, separator);
};
