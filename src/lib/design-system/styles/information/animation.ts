import {
	DEFAULT_LANGUAGE,
	NUMBER_FLOW_BASE_CLASSES,
	animateNumberValue,
	formatAnimatedValue,
	formatNumberFlowValue
} from '../../classes/information/animation';

export class AnimationStyleManager {
	static readonly defaultLanguage = DEFAULT_LANGUAGE;

	static getNumberFlowContainerClasses(className = ''): string {
		return [NUMBER_FLOW_BASE_CLASSES.container, className].filter(Boolean).join(' ');
	}

	static getNumberFlowPrefixClasses(className = ''): string {
		return [NUMBER_FLOW_BASE_CLASSES.prefix, className].filter(Boolean).join(' ');
	}

	static getNumberFlowSuffixClasses(className = ''): string {
		return [NUMBER_FLOW_BASE_CLASSES.suffix, className].filter(Boolean).join(' ');
	}

	static getNumberFlowScreenReaderClasses(className = ''): string {
		return [NUMBER_FLOW_BASE_CLASSES.srOnly, className].filter(Boolean).join(' ');
	}

	static formatNumberFlow(
		value: number,
		locales: string | string[] = 'en-US',
		format?: Intl.NumberFormatOptions
	): string {
		return formatNumberFlowValue(value, locales, format);
	}

	static animateValue(value: number): number {
		return animateNumberValue({ value });
	}

	static formatAnimated(
		value: number,
		options: { format?: 'number' | 'percent' | 'currency'; separator?: string; decimals?: number } = {}
	): string {
		return formatAnimatedValue(value, options);
	}
}
