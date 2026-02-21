import {
	NUMBER_FLOW_BASE_CLASSES,
	PIE_CHART_CONTAINER_BASE_CLASSES,
	PIE_CHART_SVG_BASE_CLASSES,
	COLOR_SWATCH_BASE_CLASSES,
	NPM_BADGE_BASE_CLASSES,
	NPM_BADGE_LINK_BASE_CLASSES,
	NPM_BADGE_TYPE_CLASSES
} from '../../classes';
import { formatAnimatedValue, formatNumberFlowValue } from '../../utils/format/index';
import { cn } from '../../utils/cn/index';

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
		return cn(PIE_CHART_CONTAINER_BASE_CLASSES, className);
	}

	static getPieChartSvgClasses(className = ''): string {
		return cn(PIE_CHART_SVG_BASE_CLASSES, className);
	}

	static getColorSwatchClasses(color: string, size: number = 16, className = ''): string {
		return cn(
			COLOR_SWATCH_BASE_CLASSES,
			className,
			`bg-[${color}]`,
			`w-[${size}px]`,
			`h-[${size}px]`
		);
	}

	/**
	 * @deprecated Use getColorSwatchClasses instead
	 * This method is kept for backward compatibility only.
	 */
	static getColorSwatchStyle(color: string, size = 16): string {
		return `background-color: ${color}; width: ${size}px; height: ${size}px;`;
	}

	static getNpmBadgeClasses(
		type: keyof typeof NPM_BADGE_TYPE_CLASSES = 'version',
		className = ''
	): string {
		return cn(NPM_BADGE_BASE_CLASSES, NPM_BADGE_TYPE_CLASSES[type], className);
	}

	static getNpmBadgeLinkClasses(className = ''): string {
		return cn(NPM_BADGE_LINK_BASE_CLASSES, className);
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
