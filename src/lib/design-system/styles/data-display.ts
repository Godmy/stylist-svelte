import {
	NUMBER_FLOW_BASE_CLASSES,
	formatAnimatedValue,
	formatNumberFlowValue
} from '../classes/animation';
import { ChartStyleManager } from './chart';
import { cn } from '../utils/cn';

export class DataDisplayStyleManager {
	static getAnimatedNumberClasses(className = ''): string {
		return cn(className, 'font-mono');
	}

	static formatAnimatedValue(
		value: number,
		options: { format?: 'number' | 'percent' | 'currency'; separator?: string; decimals?: number } = {}
	): string {
		return formatAnimatedValue(value, options);
	}

	static getPieChartContainerClasses(className = ''): string {
		return ChartStyleManager.getPieChartContainerClasses(className);
	}

	static getPieChartSvgClasses(className = ''): string {
		return ChartStyleManager.getPieChartSvgClasses(className);
	}

	static getColorSwatchClasses(className = ''): string {
		return ChartStyleManager.getColorSwatchClasses(className);
	}

	static getColorSwatchStyle(color: string, size = 16): string {
		return ChartStyleManager.getColorSwatchStyle(color, size);
	}

	static getNpmBadgeClasses(
		type: 'version' | 'downloads' | 'license' | 'size' | 'custom',
		className = ''
	): string {
		return ChartStyleManager.getNpmBadgeClasses(type, className);
	}

	static getNpmBadgeLinkClasses(className = ''): string {
		return ChartStyleManager.getNpmBadgeLinkClasses(className);
	}

	static getNumberFlowContainerClasses(className = ''): string {
		return cn(NUMBER_FLOW_BASE_CLASSES.container, className);
	}

	static getNumberFlowClasses(className = ''): {
		container: string;
		prefix: string;
		suffix: string;
		srOnly: string;
	} {
		return {
			container: cn(NUMBER_FLOW_BASE_CLASSES.container, className),
			prefix: NUMBER_FLOW_BASE_CLASSES.prefix,
			suffix: NUMBER_FLOW_BASE_CLASSES.suffix,
			srOnly: NUMBER_FLOW_BASE_CLASSES.srOnly
		};
	}

	static formatNumberFlowValue(
		value: number,
		locales: string | string[] = 'en-US',
		format?: Intl.NumberFormatOptions
	): string {
		return formatNumberFlowValue(value, locales, format);
	}
}
