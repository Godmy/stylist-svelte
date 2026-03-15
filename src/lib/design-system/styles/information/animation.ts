import { formatAnimatedValue, formatNumberFlowValue } from '../../utils/format/index';





export class AnimationStyleManager {
	static readonly defaultLanguage = 'en';

	static getNumberFlowContainerClasses(className = ''): string {
		return ['flex items-center', className].filter(Boolean).join(' ');
	}

	static getNumberFlowPrefixClasses(className = ''): string {
		return ['mr-1', className].filter(Boolean).join(' ');
	}

	static getNumberFlowSuffixClasses(className = ''): string {
		return ['ml-1', className].filter(Boolean).join(' ');
	}

	static getNumberFlowScreenReaderClasses(className = ''): string {
		return ['sr-only', className].filter(Boolean).join(' ');
	}

	static formatNumberFlow(
		value: number,
		locales: string | string[] = 'en-US',
		format?: Intl.NumberFormatOptions
	): string {
		return formatNumberFlowValue(value, locales, format);
	}

	static animateValue(value: number): number {
		return value;
	}

	static formatAnimated(
		value: number,
		options: { format?: 'number' | 'percent' | 'currency'; separator?: string; decimals?: number } = {}
	): string {
		return formatAnimatedValue(value, options);
	}
}


