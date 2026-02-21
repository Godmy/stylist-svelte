import {
	PIE_CHART_CONTAINER_BASE_CLASSES,
	PIE_CHART_SVG_BASE_CLASSES
} from '../../classes/information/chart';
import { cn } from '../../utils/cn/index';

export class ChartStyleManager {
	static getPieChartContainerClasses(className = ''): string {
		return cn(PIE_CHART_CONTAINER_BASE_CLASSES, className);
	}

	static getPieChartSvgClasses(className = ''): string {
		return cn(PIE_CHART_SVG_BASE_CLASSES, className);
	}
}
