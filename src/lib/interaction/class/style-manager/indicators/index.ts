import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenAvailability } from '$stylist/interaction/type/record/availability';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { DOT_COLOR_CLASSES } from '$stylist/interaction/const/map/dot-color-classes';
import { DOT_SIZE_CLASSES } from '$stylist/interaction/const/map/dot-size-classes';
import { COUNTER_VARIANT_CLASSES } from '$stylist/interaction/const/map/counter-variant-classes';
import { COUNTER_SIZE_CLASSES } from '$stylist/interaction/const/map/counter-size-classes';
import { MARKER_COLOR_CLASSES } from '$stylist/interaction/const/map/marker-color-classes';
import { MARKER_SIZE_CLASSES } from '$stylist/interaction/const/map/marker-size-classes';
import { BULLET_SIZE_CLASSES } from '$stylist/interaction/const/map/bullet-size-classes';
import { MESSAGE_STATUS_COLORS } from '$stylist/interaction/const/map/message-status-colors';
import { MESSAGE_STATUS_SIZE_CLASSES } from '$stylist/interaction/const/map/message-status-size-classes';
import { STATUS_INDICATOR_STATUS_CLASSES } from '$stylist/interaction/const/map/status-indicator-status-classes';
import { STATUS_INDICATOR_STATUS_TEXT } from '$stylist/interaction/const/map/status-indicator-status-text';
import { TOKEN_STATUS_LABEL_CONTAINER } from '$stylist/interaction/const/enum/status-label-container';
import { STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES } from '$stylist/interaction/const/map/status-indicator-with-label-size-classes';





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
		return mergeClassNames('inline-block rounded-full', DOT_COLOR_CLASSES[color], DOT_SIZE_CLASSES[size], className);
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
		return mergeClassNames(
			'inline-flex items-center justify-center rounded-full font-medium',
			COUNTER_VARIANT_CLASSES[variant],
			COUNTER_SIZE_CLASSES[size],
			className
		);
	}

	static getCountBadgeClasses(className = ''): string {
		return mergeClassNames(
			'inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-[var(--color-text-inverse)] bg-[var(--color-danger-500)] rounded-full',
			className
		);
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
		return mergeClassNames(
			'inline-flex items-center justify-center flex-shrink-0',
			MARKER_COLOR_CLASSES[color],
			MARKER_SIZE_CLASSES[size],
			className
		);
	}

	static getBulletClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return mergeClassNames('rounded-full bg-current', BULLET_SIZE_CLASSES[size]);
	}

	static getMessageStatusContainerClasses(status: 'sent' | 'delivered' | 'read' | 'error'): string {
		return MESSAGE_STATUS_COLORS[status];
	}

	static getMessageStatusIconClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return MESSAGE_STATUS_SIZE_CLASSES[size];
	}

	static getStatusIndicatorContainerClasses(className = ''): string {
		return mergeClassNames('flex items-center', className);
	}

	static getStatusIndicatorDotClasses(status: TokenAvailability): string {
		return mergeClassNames('w-3 h-3 rounded-full mr-2', STATUS_INDICATOR_STATUS_CLASSES[status]);
	}

	static getStatusIndicatorLabel(status: TokenAvailability, label?: string): string {
		return label ?? STATUS_INDICATOR_STATUS_TEXT[status];
	}

	static getStatusIndicatorWithLabelContainerClasses(className = ''): string {
		return mergeClassNames(...TOKEN_STATUS_LABEL_CONTAINER, className);
	}

	static getStatusIndicatorWithLabelIndicatorClasses(
		appearance: TokenAppearance,
		size: 'sm' | 'md' | 'lg' = 'md',
		customColor?: string,
		indicatorClass = ''
	): string {
		const appearanceClassMap: Partial<Record<TokenAppearance, string>> = {
			default: 'bg-[--color-neutral-500]',
			primary: 'bg-[--color-primary-500]',
			secondary: 'bg-[--color-secondary-500]',
			success: 'bg-[--color-success-500]',
			warning: 'bg-[--color-warning-500]',
			danger: 'bg-[--color-danger-500]',
			error: 'bg-[--color-danger-500]',
			info: 'bg-[--color-info-500]',
			solid: 'bg-[--color-primary-500]',
			outline: 'bg-[--color-neutral-500]',
			ghost: 'bg-[--color-neutral-500]',
			link: 'bg-[--color-info-500]',
			subtle: 'bg-[--color-neutral-400]',
			neutral: 'bg-[--color-neutral-500]',
			gray: 'bg-[--color-neutral-400]',
			dark: 'bg-[--color-neutral-800]',
			light: 'bg-[--color-neutral-300]',
			elevated: 'bg-[--color-neutral-500]',
			flat: 'bg-[--color-neutral-500]'
		};
		return mergeClassNames(
			'inline-block rounded-full mr-2',
			STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES[size],
			customColor ? `bg-[${customColor}]` : appearanceClassMap[appearance] ?? 'bg-[--color-neutral-500]',
			indicatorClass
		);
	}

	static getStatusIndicatorWithLabelLabelClasses(labelClass = ''): string {
		return mergeClassNames('text-sm', labelClass);
	}
}
