import type { IndicatorStatus } from '../tokens/indicators';
import {
	BASE_COUNT_BADGE_CLASSES,
	BASE_COUNTER_CLASSES,
	BASE_DOT_CLASSES,
	BASE_MARKER_CLASSES,
	BULLET_CLASSES,
	BULLET_SIZE_CLASSES,
	COUNTER_SIZE_CLASSES,
	COUNTER_VARIANT_CLASSES,
	DOT_COLOR_CLASSES,
	DOT_SIZE_CLASSES,
	MARKER_COLOR_CLASSES,
	MARKER_SIZE_CLASSES,
	MESSAGE_STATUS_COLORS,
	MESSAGE_STATUS_SIZE_CLASSES,
	STATUS_INDICATOR_CONTAINER_CLASSES,
	STATUS_INDICATOR_DOT_BASE_CLASSES,
	STATUS_INDICATOR_STATUS_CLASSES,
	STATUS_INDICATOR_STATUS_TEXT,
	STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES
} from '../classes/indicators';
import { cn } from '../utils/cn';

export class IndicatorsStyleManager {
	static getDotClasses(
		color:
			| 'primary'
			| 'secondary'
			| 'success'
			| 'warning'
			| 'danger'
			| 'info'
			| 'gray' = 'primary',
		size: 'sm' | 'md' | 'lg' = 'md',
		className = ''
	): string {
		return cn(BASE_DOT_CLASSES, DOT_COLOR_CLASSES[color], DOT_SIZE_CLASSES[size], className);
	}

	static getCounterClasses(
		variant:
			| 'default'
			| 'primary'
			| 'secondary'
			| 'danger'
			| 'success'
			| 'warning'
			| 'info'
			| 'gray'
			| 'solid'
			| 'outline'
			| 'ghost'
			| 'link'
			| 'subtle'
			| 'neutral'
			| 'dark'
			| 'light' = 'primary',
		size: 'sm' | 'md' | 'lg' = 'md',
		className = ''
	): string {
		return cn(
			BASE_COUNTER_CLASSES,
			COUNTER_VARIANT_CLASSES[variant],
			COUNTER_SIZE_CLASSES[size],
			className
		);
	}

	static getCountBadgeClasses(className = ''): string {
		return cn(BASE_COUNT_BADGE_CLASSES, className);
	}

	static getMarkerClasses(
		color:
			| 'primary'
			| 'secondary'
			| 'success'
			| 'warning'
			| 'danger'
			| 'info'
			| 'gray' = 'primary',
		size: 'sm' | 'md' | 'lg' = 'md',
		className = ''
	): string {
		return cn(BASE_MARKER_CLASSES, MARKER_COLOR_CLASSES[color], MARKER_SIZE_CLASSES[size], className);
	}

	static getBulletClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return cn(BULLET_CLASSES, BULLET_SIZE_CLASSES[size]);
	}

	static getMessageStatusContainerClasses(status: 'sent' | 'delivered' | 'read'): string {
		return MESSAGE_STATUS_COLORS[status];
	}

	static getMessageStatusIconClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return MESSAGE_STATUS_SIZE_CLASSES[size];
	}

	static getStatusIndicatorContainerClasses(className = ''): string {
		return cn(STATUS_INDICATOR_CONTAINER_CLASSES, className);
	}

	static getStatusIndicatorDotClasses(status: IndicatorStatus): string {
		return cn(STATUS_INDICATOR_DOT_BASE_CLASSES, STATUS_INDICATOR_STATUS_CLASSES[status]);
	}

	static getStatusIndicatorLabel(status: IndicatorStatus, label?: string): string {
		return label ?? STATUS_INDICATOR_STATUS_TEXT[status];
	}

	static getStatusIndicatorWithLabelContainerClasses(className = ''): string {
		return cn(...STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES, className);
	}

	static getStatusIndicatorWithLabelIndicatorClasses(
		status: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'custom',
		size: 'sm' | 'md' | 'lg' = 'md',
		customColor?: string,
		indicatorClass = ''
	): string {
		return cn(
			'inline-block rounded-full mr-2',
			STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES[size],
			status === 'custom'
				? customColor
					? `bg-[${customColor}]`
					: 'bg-gray-500'
				: STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES[status],
			indicatorClass
		);
	}

	static getStatusIndicatorWithLabelLabelClasses(labelClass = ''): string {
		return cn('text-sm', labelClass);
	}
}
