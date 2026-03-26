import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { TokenAvailability } from '$stylist/interaction/type/token/availability';
import { cn } from '$stylist/information/function/cn/index';

const DOT_COLOR_CLASSES = {
	default: 'bg-[--color-neutral-500]',
	primary: 'bg-[--color-primary-600]',
	secondary: 'bg-[--color-neutral-600]',
	success: 'bg-[--color-success-600]',
	warning: 'bg-[--color-warning-600]',
	danger: 'bg-[--color-danger-600]',
	info: 'bg-[--color-info-600]',
	gray: 'bg-[--color-neutral-400]',
	solid: 'bg-[--color-primary-600]',
	outline: 'bg-[--color-neutral-500]',
	ghost: 'bg-[--color-neutral-500]',
	link: 'bg-[--color-info-600]',
	subtle: 'bg-[--color-neutral-400]',
	neutral: 'bg-[--color-neutral-500]',
	dark: 'bg-[--color-neutral-800]',
	light: 'bg-[--color-neutral-300]'
} as const;

const DOT_SIZE_CLASSES = {
	xs: 'w-1.5 h-1.5',
	sm: 'w-2 h-2',
	md: 'w-3 h-3',
	lg: 'w-4 h-4',
	xl: 'w-5 h-5',
	'2xl': 'w-6 h-6'
} as const;

const COUNTER_VARIANT_CLASSES = {
	default: 'bg-[--color-neutral-100] text-[--color-text-primary]',
	primary: 'bg-[--color-primary-500] text-[--color-text-inverse]',
	secondary: 'bg-[--color-secondary-500] text-[--color-text-inverse]',
	danger: 'bg-[--color-danger-500] text-[var(--color-text-inverse)]',
	success: 'bg-[--color-success-500] text-[var(--color-text-inverse)]',
	warning: 'bg-[--color-warning-500] text-[--color-text-primary]',
	info: 'bg-[--color-info-500] text-[var(--color-text-inverse)]',
	gray: 'bg-[--color-neutral-500] text-[var(--color-text-inverse)]',
	solid: 'bg-[--color-neutral-500] text-[var(--color-text-inverse)]',
	outline: 'bg-transparent text-[--color-text-primary] border border-[--color-border-secondary]',
	ghost: 'bg-transparent text-[--color-text-primary]',
	link: 'bg-transparent text-[--color-info-600] underline',
	subtle: 'bg-[--color-neutral-100] text-[--color-text-primary]',
	neutral: 'bg-[--color-neutral-200] text-[--color-text-primary]',
	dark: 'bg-[--color-neutral-800] text-[var(--color-text-inverse)]',
	light: 'bg-[--color-neutral-100] text-[--color-text-primary]'
} as const;

const COUNTER_SIZE_CLASSES = {
	xs: 'px-1 min-w-[1rem] h-4 text-[10px]',
	sm: 'px-1 min-w-[1.25rem] h-5 text-xs',
	md: 'px-1.5 min-w-[1.5rem] h-6 text-sm',
	lg: 'px-2 min-w-[1.75rem] h-7 text-base',
	xl: 'px-2.5 min-w-[2rem] h-8 text-lg',
	'2xl': 'px-3 min-w-[2.25rem] h-9 text-xl'
} as const;

const MARKER_COLOR_CLASSES = {
	default: 'text-[--color-text-secondary]',
	primary: 'text-[--color-primary-500]',
	secondary: 'text-[--color-secondary-500]',
	success: 'text-[--color-success-500]',
	warning: 'text-[--color-warning-500]',
	danger: 'text-[--color-danger-500]',
	info: 'text-[--color-info-500]',
	gray: 'text-[--color-text-tertiary]',
	solid: 'text-[--color-primary-500]',
	outline: 'text-[--color-text-primary]',
	ghost: 'text-[--color-text-primary]',
	link: 'text-[--color-info-600]',
	subtle: 'text-[--color-text-secondary]',
	neutral: 'text-[--color-neutral-500]',
	dark: 'text-[--color-neutral-900]',
	light: 'text-[--color-neutral-100]'
} as const;

const MARKER_SIZE_CLASSES = {
	xs: 'h-3 w-3 text-[10px]',
	sm: 'h-4 w-4 text-xs',
	md: 'h-5 w-5 text-sm',
	lg: 'h-6 w-6 text-base',
	xl: 'h-7 w-7 text-lg',
	'2xl': 'h-8 w-8 text-xl'
} as const;

const BULLET_SIZE_CLASSES = {
	xs: 'h-1 w-1',
	sm: 'h-1.5 w-1.5',
	md: 'h-2 w-2',
	lg: 'h-2.5 w-2.5',
	xl: 'h-3 w-3',
	'2xl': 'h-3.5 w-3.5'
} as const;

const MESSAGE_STATUS_COLORS = {
	sent: 'text-[--color-neutral-400]',
	delivered: 'text-[--color-neutral-400]',
	read: 'text-[--color-success-500]',
	error: 'text-[--color-danger-500]'
} as const;

const MESSAGE_STATUS_SIZE_CLASSES = {
	xs: 'w-2.5 h-2.5',
	sm: 'w-3 h-3',
	md: 'w-4 h-4',
	lg: 'w-5 h-5',
	xl: 'w-6 h-6',
	'2xl': 'w-7 h-7'
} as const;

const STATUS_INDICATOR_STATUS_CLASSES = {
	online: 'bg-[--color-success-500]',
	offline: 'bg-[--color-neutral-500]',
	away: 'bg-[--color-warning-500]',
	busy: 'bg-[--color-danger-500]',
	typing: 'bg-[--color-info-500]'
} as const;

const STATUS_INDICATOR_STATUS_TEXT = {
	online: 'Online',
	offline: 'Offline',
	away: 'Away',
	busy: 'Busy',
	typing: 'Typing'
} as const;

const STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES = ['flex', 'items-center'] as const;

const STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES = {
	sm: 'w-2 h-2',
	md: 'w-3 h-3',
	lg: 'w-4 h-4'
} as const;

const STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES = {
	success: 'bg-[--color-success-500]',
	warning: 'bg-[--color-warning-500]',
	error: 'bg-[--color-danger-500]',
	info: 'bg-[--color-info-500]',
	neutral: 'bg-[--color-neutral-500]',
	custom: 'bg-[--color-neutral-500]'
} as const;





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
		return cn('inline-block rounded-full', DOT_COLOR_CLASSES[color], DOT_SIZE_CLASSES[size], className);
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
			'inline-flex items-center justify-center rounded-full font-medium',
			COUNTER_VARIANT_CLASSES[variant],
			COUNTER_SIZE_CLASSES[size],
			className
		);
	}

	static getCountBadgeClasses(className = ''): string {
		return cn(
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
		return cn(
			'inline-flex items-center justify-center flex-shrink-0',
			MARKER_COLOR_CLASSES[color],
			MARKER_SIZE_CLASSES[size],
			className
		);
	}

	static getBulletClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return cn('rounded-full bg-current', BULLET_SIZE_CLASSES[size]);
	}

	static getMessageStatusContainerClasses(status: 'sent' | 'delivered' | 'read' | 'error'): string {
		return MESSAGE_STATUS_COLORS[status];
	}

	static getMessageStatusIconClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
		return MESSAGE_STATUS_SIZE_CLASSES[size];
	}

	static getStatusIndicatorContainerClasses(className = ''): string {
		return cn('flex items-center', className);
	}

	static getStatusIndicatorDotClasses(status: TokenAvailability): string {
		return cn('w-3 h-3 rounded-full mr-2', STATUS_INDICATOR_STATUS_CLASSES[status]);
	}

	static getStatusIndicatorLabel(status: TokenAvailability, label?: string): string {
		return label ?? STATUS_INDICATOR_STATUS_TEXT[status];
	}

	static getStatusIndicatorWithLabelContainerClasses(className = ''): string {
		return cn(...STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES, className);
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
		return cn(
			'inline-block rounded-full mr-2',
			STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES[size],
			customColor ? `bg-[${customColor}]` : appearanceClassMap[appearance] ?? 'bg-[--color-neutral-500]',
			indicatorClass
		);
	}

	static getStatusIndicatorWithLabelLabelClasses(labelClass = ''): string {
		return cn('text-sm', labelClass);
	}
}






