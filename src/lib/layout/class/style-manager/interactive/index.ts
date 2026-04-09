import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export type InteractiveTransition = 'all' | 'colors' | 'shadow' | 'transform' | 'opacity';
export type InteractiveHoverShadow = 'sm' | 'md' | 'lg' | 'xl';
export type InteractiveFocusColor = 'primary' | 'accent' | 'error' | 'success';

const TRANSITION_MAP: Record<InteractiveTransition, string> = {
	all: 'transition-all duration-150 ease-in-out',
	colors: 'transition-colors duration-150 ease-in-out',
	shadow: 'transition-shadow duration-150 ease-in-out',
	transform: 'transition-transform duration-150 ease-in-out',
	opacity: 'transition-opacity duration-150 ease-in-out'
};

const HOVER_SHADOW_MAP: Record<InteractiveHoverShadow, string> = {
	sm: 'hover:shadow-sm',
	md: 'hover:shadow-md',
	lg: 'hover:shadow-lg',
	xl: 'hover:shadow-xl'
};

const FOCUS_COLOR_MAP: Record<InteractiveFocusColor, string> = {
	primary: 'focus-visible:ring-[--color-primary-500]',
	accent: 'focus-visible:ring-[--color-accent-500]',
	error: 'focus-visible:ring-[--color-error-500]',
	success: 'focus-visible:ring-[--color-success-500]'
};

export class InteractiveStyleManager {
	// ─── Transition ───────────────────────────────────────────────────────────

	static getTransitionClass(property: InteractiveTransition = 'all'): string {
		return TRANSITION_MAP[property];
	}

	// ─── Hover ────────────────────────────────────────────────────────────────

	static getHoverShadowClass(level: InteractiveHoverShadow = 'md'): string {
		return HOVER_SHADOW_MAP[level];
	}

	static getHoverBgClass(token = '--color-background-secondary'): string {
		return `hover:bg-[${token}]`;
	}

	static getHoverBorderClass(token = '--color-primary-500'): string {
		return `hover:border-[${token}]`;
	}

	static getHoverOpacityClass(value = '80'): string {
		return `hover:opacity-${value}`;
	}

	static getHoverScaleClass(value = '105'): string {
		return `hover:scale-[1.0${value.slice(-2)}]`;
	}

	// ─── Focus ────────────────────────────────────────────────────────────────

	static getFocusRingClass(color: InteractiveFocusColor = 'primary', offset = true): string {
		return mergeClassNames(
			'focus-visible:outline-none focus-visible:ring-2',
			FOCUS_COLOR_MAP[color],
			offset && 'focus-visible:ring-offset-2'
		);
	}

	static getFocusWithinClass(color: InteractiveFocusColor = 'primary'): string {
		return mergeClassNames(
			'focus-within:outline-none focus-within:ring-2',
			FOCUS_COLOR_MAP[color].replace('focus-visible:', 'focus-within:'),
			'focus-within:ring-offset-2'
		);
	}

	// ─── Active ───────────────────────────────────────────────────────────────

	static getActiveScaleClass(value = '95'): string {
		return `active:scale-[0.${value}]`;
	}

	static getActiveBgClass(token = '--color-background-tertiary'): string {
		return `active:bg-[${token}]`;
	}

	// ─── Disabled ─────────────────────────────────────────────────────────────

	static getDisabledClass(): string {
		return 'disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed';
	}

	static getAriaDisabledClass(): string {
		return 'aria-disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed';
	}

	// ─── Preset combinations ──────────────────────────────────────────────────

	/**
	 * Базовый интерактивный набор для кликабельных контейнеров (card, list item).
	 */
	static getInteractiveContainerClass(): string {
		return mergeClassNames(
			'cursor-pointer',
			this.getTransitionClass('shadow'),
			this.getHoverShadowClass('md'),
			this.getFocusRingClass('primary', true),
			this.getActiveScaleClass('98')
		);
	}

	/**
	 * Интерактивный набор для строк списка / таблицы.
	 */
	static getInteractiveRowClass(): string {
		return mergeClassNames(
			'cursor-pointer',
			this.getTransitionClass('colors'),
			this.getHoverBgClass(),
			this.getFocusRingClass('primary', false)
		);
	}

	/**
	 * Набор для overlay / badge элементов поверх base контента.
	 */
	static getInteractiveOverlayClass(): string {
		return mergeClassNames(
			'cursor-pointer',
			this.getTransitionClass('opacity'),
			this.getHoverOpacityClass('90'),
			this.getFocusRingClass('primary', true)
		);
	}
}
