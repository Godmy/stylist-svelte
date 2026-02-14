import {
	COLOR_SWATCH_BASE_CLASSES,
	NPM_BADGE_BASE_CLASSES,
	NPM_BADGE_LINK_BASE_CLASSES,
	NPM_BADGE_TYPE_CLASSES,
	PIE_CHART_CONTAINER_BASE_CLASSES,
	PIE_CHART_SVG_BASE_CLASSES
} from '../classes/chart';
import { cn } from '../utils/cn';

export class ChartStyleManager {
	static getPieChartContainerClasses(className = ''): string {
		return cn(PIE_CHART_CONTAINER_BASE_CLASSES, className);
	}

	static getPieChartSvgClasses(className = ''): string {
		return cn(PIE_CHART_SVG_BASE_CLASSES, className);
	}

	static getColorSwatchClasses(className = ''): string {
		return cn(COLOR_SWATCH_BASE_CLASSES, className);
	}

	static getColorSwatchStyle(color: string, size = 16): string {
		return `background-color: ${color}; width: ${size}px; height: ${size}px;`;
	}

	static getNpmBadgeClasses(
		type: keyof typeof NPM_BADGE_TYPE_CLASSES = 'version',
		className = ''
	): string {
		return cn(NPM_BADGE_BASE_CLASSES, NPM_BADGE_TYPE_CLASSES[type], className);
	}

	static getNpmBadgeLabel(type: 'version' | 'downloads' | 'license' = 'version', label?: string): string {
		return label ?? (type === 'version' ? 'version' : type);
	}

	static getNpmBadgeLinkClasses(className = ''): string {
		return cn(NPM_BADGE_LINK_BASE_CLASSES, className);
	}
}
