import {
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
}
