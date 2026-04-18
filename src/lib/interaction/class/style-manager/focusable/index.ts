import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { FocusableStyleManagerOptions } from '$stylist/interaction/interface/slot/focusable-style-manager-options';

export class FocusableStyleManager {
	private static readonly BASE = 'transition-all duration-100 ease-in-out';
	private static readonly FOCUS_EFFECT = 'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
	private static readonly FOCUSED = 'ring-2 ring-primary-500 ring-offset-2';
	private static readonly DISABLED = 'opacity-50 cursor-not-allowed';

	/**
	 * Базовые классы для focusable элементов
	 */
	static getBaseClasses(className?: string): string {
		return mergeClassNames(this.BASE, className);
	}

	/**
	 * Классы для эффекта фокуса
	 */
	static getFocusEffectClasses(): string {
		return this.FOCUS_EFFECT;
	}

	/**
	 * Классы для активного фокуса
	 */
	static getFocusedClasses(): string {
		return this.FOCUSED;
	}

	/**
	 * Полные классы для focusable компонента
	 */
	static getClasses(options: FocusableStyleManagerOptions = {}): string {
		const {
			focusEffect = true,
			isFocused = false,
			disabled = false,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames(this.BASE, this.DISABLED, className);
		}

		if (isFocused) {
			return mergeClassNames(this.BASE, this.FOCUSED, className);
		}

		return mergeClassNames(
			this.BASE,
			focusEffect ? this.FOCUS_EFFECT : '',
			className
		);
	}
}
