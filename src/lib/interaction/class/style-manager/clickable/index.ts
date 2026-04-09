import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { ClickableStyleManagerOptions } from '$stylist/interaction/class/style-manager/clickable-style-manager-options';

export class ClickableStyleManager {
	private static readonly BASE = 'transition-all duration-120 ease-in-out';
	private static readonly PRESS_EFFECT = 'active:scale-95';
	private static readonly HOVER_EFFECT = 'hover:opacity-80';
	private static readonly DISABLED = 'opacity-50 cursor-not-allowed pointer-events-none';

	/**
	 * Базовые классы для всех кликабельных элементов
	 */
	static getBaseClasses(className?: string): string {
		return mergeClassNames(this.BASE, className);
	}

	/**
	 * Классы для варианта (variant)
	 */
	static getVariantClasses(variant: string = 'default'): string {
		switch (variant) {
			case 'primary':
				return 'bg-primary-500 text-white hover:bg-primary-600';
			case 'secondary':
				return 'bg-secondary-500 text-white hover:bg-secondary-600';
			case 'ghost':
				return 'bg-transparent hover:bg-neutral-100';
			case 'link':
				return 'text-primary-500 underline hover:text-primary-600';
			default:
				return 'bg-transparent';
		}
	}

	/**
	 * Полные классы для clickable компонента
	 */
	static getClasses(options: ClickableStyleManagerOptions = {}): string {
		const {
			variant = 'default',
			disabled = false,
			pressEffect = true,
			hoverEffect = true,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames(this.BASE, this.DISABLED, className);
		}

		return mergeClassNames(
			this.BASE,
			this.getVariantClasses(variant),
			pressEffect ? this.PRESS_EFFECT : '',
			hoverEffect ? this.HOVER_EFFECT : '',
			className
		);
	}

	/**
	 * Классы для курсора
	 */
	static getCursorClasses(cursor: string = 'pointer'): string {
		return `cursor-${cursor}`;
	}
}
